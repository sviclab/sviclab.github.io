import type {Metadata} from 'next';
import data from '../../data/achievements.json';
import PageHero from '../components/PageHero';
import RecordExplorer from '../components/RecordExplorer';

export const metadata:Metadata={title:'Projects | SViC Lab'};

const groupNames:Record<string,string>={
  '민간':'Industry',
  '국토부':'Ministry of Land, Infrastructure and Transport',
  '산업부':'Ministry of Trade, Industry and Energy',
  '공단및공사용역':'Public Corporation Services',
  '연구재단':'National Research Foundation',
  '중소벤처기업부':'Ministry of SMEs and Startups',
  '연구재단(과학일반)':'National Research Foundation',
  '공공기관용역':'Public Sector Services',
  '기타R&D':'Other R&D',
  '기술이전':'Technology Transfer',
  '서울산업진흥원':'Seoul Business Agency',
};

type Project=(typeof data.projects)[number];
type ProjectSummary=Project&{displayStart:string;displayEnd:string};

function cleanTitle(title:string){
  return title
    .replace(/^\[\d+-\d+\]\s*/,'')
    .replace(/^\[(?:통합RCMS|RCMS|통합Ezbaro|통합Ez|Ezbaro)\]\s*/,'')
    .trim();
}

function normalizedTitle(title:string){
  return cleanTitle(title).replace(/[\s·ㆍ?]/g,'');
}

function canonicalTitle(title:string){
  const normalized=normalizedTitle(title);
  if(normalized.startsWith('강선을이용한횡력저항모듈러코어시스템개발'))return '강선을이용한횡력저항모듈러코어시스템개발';
  if(normalized.startsWith('화성봉담(2)S1블록성능기반설계검증-건축구조분야'))return '화성봉담(2)S1블록성능기반설계검증-건축구조분야';
  return normalized;
}

const verifiedPeriods=new Map<string,[string,string]>([
  ['강선을이용한횡력저항모듈러코어시스템개발',['2015-01-01','2022-12-31']],
  ['조적/칸막이벽체내진성능향상기술및비구조요소표준내진상세개발',['2018-04-01','2021-12-31']],
  ['철골가새골조의붕괴확률기반지진위험도평가',['2016-06-01','2019-06-30']],
  ['화성봉담(2)S1블록성능기반설계검증-건축구조분야',['2017-10-17','2018-10-31']],
  ['비고정형의료기기의지진대응력향상을위한기술개발및실증',['2025-07-01','2027-03-31']],
  ['메쉬몰데크시스템의구조성능에관한해석적평가',['2025-10-01','2026-01-31']],
]);

function projectKey(project:Project){
  const title=canonicalTitle(project.title);
  if(verifiedPeriods.has(title))return title;
  if(project.overallStartDate&&project.overallEndDate){
    return `${project.overallStartDate}|${project.overallEndDate}`;
  }
  return project.projectNumber;
}

const uniqueProjects=[...data.projects.reduce((projects,project)=>{
  const key=projectKey(project);
  const existing=projects.get(key);
  const verified=verifiedPeriods.get(canonicalTitle(project.title));
  const start=verified?.[0]||project.overallStartDate||project.startDate;
  const end=verified?.[1]||project.overallEndDate||project.endDate;
  if(!existing){
    projects.set(key,{...project,displayStart:start,displayEnd:end});
  }else{
    const preferred=cleanTitle(project.title).length>cleanTitle(existing.title).length?project:existing;
    projects.set(key,{
      ...preferred,
      displayStart:[existing.displayStart,start].filter(Boolean).sort()[0]||'',
      displayEnd:[existing.displayEnd,end].filter(Boolean).sort().at(-1)||'',
    });
  }
  return projects;
},new Map<string,ProjectSummary>()).values()].sort((a,b)=>
  b.displayStart.localeCompare(a.displayStart)||b.displayEnd.localeCompare(a.displayEnd)||cleanTitle(a.title).localeCompare(cleanTitle(b.title))
);

export default function Page(){
  const records=uniqueProjects.map((project,index)=>({
    id:`p-${index}`,
    year:Number(project.displayStart.slice(0,4))||0,
    side:[project.displayStart,project.displayEnd].filter(Boolean).join(' – '),
    title:cleanTitle(project.title),
    meta:[project.funder,project.agency].filter((value,i,values)=>value&&values.indexOf(value)===i).join(' · '),
    detail:project.program,
    group:groupNames[project.group]||project.group,
  }));
  const groups=[...new Set(records.map(project=>project.group).filter(Boolean))].sort();

  return <>
    <PageHero
      title="Projects"
      description={`${records.length} research projects supported by government, public-sector, and industry partners. Multi-year projects are listed once using their full project periods.`}
    />
    <section className="content-section page-width">
      <div className="section-title"><h2>All records</h2><p>{records.length} projects</p></div>
      <RecordExplorer records={records} groups={groups} placeholder="Search project or sponsor"/>
    </section>
  </>;
}
