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

const multiYearTitles=new Set([
  '강선을이용한횡력저항모듈러코어시스템개발(총괄:모듈러건축중고층화및생산성향상기술개발)',
  '조적/칸막이벽체내진성능향상기술및비구조요소표준내진상세개발',
  '철골가새골조의붕괴확률기반지진위험도평가',
]);

function projectKey(project:Project){
  const title=normalizedTitle(project.title);
  if(multiYearTitles.has(title))return title;
  if(project.overallStartDate&&project.overallEndDate){
    return `${project.overallStartDate}|${project.overallEndDate}`;
  }
  return project.projectNumber;
}

const uniqueProjects=[...data.projects.reduce((projects,project)=>{
  const key=projectKey(project);
  const existing=projects.get(key);
  const start=project.overallStartDate||project.startDate;
  const end=project.overallEndDate||project.endDate;
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
},new Map<string,ProjectSummary>()).values()];

export default function Page(){
  const records=uniqueProjects.map((project,index)=>({
    id:`p-${index}`,
    side:[project.displayStart,project.displayEnd].filter(Boolean).join(' – '),
    title:cleanTitle(project.title),
    meta:[project.funder,project.agency].filter((value,i,values)=>value&&values.indexOf(value)===i).join(' · '),
    detail:project.program,
    group:groupNames[project.group]||project.group,
  }));
  const groups=[...new Set(records.map(project=>project.group).filter(Boolean))].sort();

  return <>
    <PageHero
      eyebrow="Projects"
      title="Research Projects"
      description={`${records.length} research projects supported by government, public-sector, and industry partners. Multi-year projects are listed once using their full project periods.`}
    />
    <section className="content-section page-width">
      <div className="section-title"><h2>All records</h2><p>{records.length} projects</p></div>
      <RecordExplorer records={records} groups={groups} placeholder="Search project or sponsor"/>
    </section>
  </>;
}
