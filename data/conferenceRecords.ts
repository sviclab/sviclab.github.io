import data from './achievements.json';

const supplementalRecords=[
  {id:'c-eurodyn-2020',year:2020,sortDate:'2020-11-23',number:0,title:'Structural Properties of Unreinforced Masonry Walls Considering Construction Qualities',meta:'11th International Conference on Structural Dynamics (EURODYN 2020) · Virtual, Athens, Greece',group:'International' as const,link:'https://doi.org/10.47964/1120.9164.19172',linkLabel:'Paper' as const},
  {id:'c-icbmc-2018',year:2018,sortDate:'2018-02-23',number:0,title:'Experimental Investigation on Inelastic Cyclic Behaviour of Bracing Member with Wide-flange Section',meta:'3rd International Conference on Building Materials and Construction (ICBMC 2018) · Nha Trang, Vietnam',group:'International' as const,link:'https://doi.org/10.1088/1757-899X/371/1/012030',linkLabel:'Paper' as const},
];
const directPaperLinks:Record<number,string>={
  1:'https://doi.org/10.5281/zenodo.1098105',
  2:'https://doi.org/10.5281/zenodo.1099205',
  3:'https://doi.org/10.5281/zenodo.1099042',
  4:'https://doi.org/10.5281/zenodo.1099449',
  7:'https://www.auric.or.kr/User/Rdoc/DocRdoc.aspx?returnVal=RD_R&dn=340732',
  8:'https://www.auric.or.kr/User/Rdoc/DocRdoc.aspx?returnVal=RD_R&dn=340838',
  9:'https://www.auric.or.kr/User/Rdoc/DocRdoc.aspx?returnVal=RD_R&dn=340837',
  11:'https://www.auric.or.kr/User/Rdoc/DocRdoc.aspx?returnVal=RD_R&dn=340731',
  13:'https://www.auric.or.kr/User/Rdoc/DocRdoc.aspx?returnVal=RD_R&dn=340733',
  15:'https://www.auric.or.kr/User/Rdoc/DocRdoc.aspx?returnVal=RD_R&dn=341059',
  16:'https://www.auric.or.kr/User/Rdoc/DocRdoc.aspx?returnVal=RD_R&dn=341139',
  17:'https://www.auric.or.kr/User/Rdoc/DocRdoc.aspx?returnVal=RD_R&dn=245956',
  18:'https://www.auric.or.kr/User/Rdoc/DocRdoc.aspx?returnVal=RD_R&dn=240304',
  19:'https://www.auric.or.kr/User/Rdoc/DocRdoc.aspx?returnVal=RD_R&dn=249822',
  21:'https://www.auric.or.kr/User/Rdoc/DocRdoc.aspx?returnVal=RD_R&dn=249796',
  23:'https://www.iitk.ac.in/nicee/wcee/article/WCEE2012_1422.pdf',
  25:'https://doi.org/10.4028/www.scientific.net/amm.470.1011',
  26:'https://doi.org/10.4028/www.scientific.net/amm.470.966',
  27:'https://doi.org/10.4028/www.scientific.net/amm.470.1085',
  28:'https://doi.org/10.4028/www.scientific.net/amm.470.525',
  31:'https://doi.org/10.7763/ijet.2014.v6.694',
  32:'http://www.ndsl.kr/ndsl/commons/util/ndslOriginalView.do?cn=CFKO201328848464319&dbt=CFKO&oCn=NPAP11185845',
  33:'https://db.koreascholar.com/article?code=301692',
  34:'https://db.koreascholar.com/article?code=301720',
  36:'https://db.koreascholar.com/Article?code=292156',
  44:'https://www.auric.or.kr/User/Rdoc/DocRdoc.aspx?returnVal=RD_R&dn=321524',
  52:'https://www.auric.or.kr/User/Rdoc/DocRdoc.aspx?returnVal=RD_R&dn=355224',
  54:'https://www.auric.or.kr/User/Rdoc/DocRdoc.aspx?returnVal=RD_R&dn=355063',
  57:'https://www.auric.or.kr/User/Rdoc/DocRdoc.aspx?returnVal=RD_R&dn=381057',
  58:'https://www.auric.or.kr/User/Rdoc/DocRdoc.aspx?returnVal=RD_R&dn=381069',
  79:'https://doi.org/10.1002/cepa.2293',
  80:'https://doi.org/10.1002/cepa.2234',
  92:'https://doi.org/10.1201/9781003759638-33',
  96:'https://www.dbpia.co.kr/Journal/ArticleDetail/NODE02292503',
};
const inferredYears:Record<number,number>={1:2015,2:2015,3:2015,4:2015,7:2015,8:2015,9:2015,10:2015,11:2015,12:2015,13:2015,15:2015,16:2015,45:2015,50:2017,64:2019,65:2019,76:2021,83:2024,84:2024,85:2024};

function conferenceYear(record:(typeof data.conferences)[number]){const match=[record.date,record.conference,record.venue].filter(Boolean).join(' ').match(/(?:19|20)\d{2}/);return match?Number(match[0]):inferredYears[record.number]||0}
function conferenceHomepage(record:(typeof data.conferences)[number]){const name=`${record.conference} ${record.host} ${record.venue}`.toLowerCase();if(name.includes('international symposium on steel structures'))return'https://www.isss.kr/';if(name.includes('seebus'))return'https://seebus.ncree.org/proceedings.htm';if(name.includes('wcee'))return'https://wcee.nicee.org/wcee/15';if(name.includes('apvc'))return'https://ksme.or.kr/sub/sub7_3.asp?sub_param=3&top_param=7';if(name.includes('non-structural elements'))return'https://www.eucentre.it/';if(name.includes('chi-chi earthquake'))return'https://www.ncree.org/';if(name.includes('ieer international conference'))return'https://theiier.org/';if(name.includes('world academy')||name.includes('wsce'))return'https://publications.waset.org/';if(name.includes('coseik')||name.includes('computational design')||name.includes('전산구조')||name.includes('전산역학'))return'https://www.coseik.or.kr/';if(name.includes('구조물진단유지관리'))return'https://conf.ksmi.or.kr/';if(name.includes('지진공학'))return'https://www.eesk.or.kr/';if(name.includes('강구조'))return'https://www.kssc.or.kr/';if(name.includes('대한건축'))return'https://conf.aik.or.kr/';if(name.includes('방재'))return'https://www.kosham.or.kr/html/?pmode=event';if(name.includes('콘크리트'))return'https://www.kci.or.kr/pages_event/events01.vm';if(name.includes('icmemsce'))return'https://www.scientific.net/AMM.470';return'https://pure.uos.ac.kr/en/persons/hyung-joon-kim/'}

export function getConferenceRecords(){const publicationLinks=new Map(data.publications.filter(item=>item.link).map(item=>[item.title.toLowerCase(),item.link]));return[...data.conferences.map((record,index)=>{const paperLink=directPaperLinks[record.number]||publicationLinks.get(record.title.toLowerCase());return{id:`c-${index}`,year:conferenceYear(record),sortDate:record.date||'',number:record.number,title:record.title||record.conference,meta:[record.conference,record.host,record.venue].filter(Boolean).join(' · '),group:(record.scope==='international'?'International':'Domestic') as 'International'|'Domestic',link:paperLink||conferenceHomepage(record),linkLabel:paperLink?'Paper' as const:'Official site' as const}}),...supplementalRecords].sort((a,b)=>b.year-a.year||b.sortDate.localeCompare(a.sortDate)||b.number-a.number)}
