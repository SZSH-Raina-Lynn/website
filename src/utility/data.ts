export const navItems:Array<Array<string>>= [
  ["首页", ""],
  ["关于我们","about"],
  ["新闻与活动","articles"],
  ["会员企业", "partner"],
  ['合作机会',"opps"],
  ["联系我们","#contact"]
]
export const socialItems = [
  ["/WeChat.png", ""],
  ["/FaceBook.png", ""],
  ["/Twitter.png", ""]
]

// export const partners = [
//   {name: '中国xx商会1', link:"",logo:'/fake-logo-1.svg'},
//   {name: 'xx品牌', link:"", logo:'/fake-logo-2.svg'},
//   {name: '中国xx商会2', link:"", logo:'/fake-logo-3.svg'},
//   {name: 'xx品牌2', link:"", logo:'/fake-logo-4.svg'},
//   {name: '中国xx商会3', link:"", logo:'/fake-logo-5.svg'},
// ]

export const info = [
  {name: "商会地址", value: "8100 Boone Blvd, Suite 230, Vienna, VA 22182, USA "},
  {name: "邮箱", value: "info@dcszcc.org"},
  {name: "微信", value:"690238933"}
]

export const aboutInfo:Record<string, Record<string,string>[]> = {
  'intro': [
    {name:"商会介绍",lang:'cn', value:'美国大华府地区是集美国政治中心、经济中心、文化中心、高科技中心、生物科技中心和国防军工企业为一体的第四大都市圈。\n深圳是中国的证券资本市场中心以及重要的国际经济中心，仅次于北京、上海，于2015年成为中国大陆第三大经济强市，其中高新技术、金融、物流和文化产业尤为发达。'},
    {name:'introduction',lang:'eng', value:"Shenzhen, as one of China's center of securities market and global economy second only to Beijing and Shanghai, becoming the third-largest city of economy in Mainland China in 2015, of which high-tech, finance, logistics and cultural industries are particularly developed.\nThe Metro D.C. Area is the fourth largest metropolitan area that integrates the US political center, economic center, cultural center, high-tech center, biotechnology center, and defense military industry."},
  ],
  'mission': [
    {name:'misson', value:'We aim to build a platform for friendly exchanges between institutions and talents in various industries in Metro D.C. area and Shenzhen, to promote long-term commercially in-depth cooperation and communication between the two places, and to facilitate mutual benefits for innovation and entrepreneurship projects in various industries.', lang:'eng'},
    {name:'愿景',value:'搭建美国大华府地区与中国深圳两地在各行业机构与人才的友好交流平台；促进两地长期商业深度合作交流；推进各行业创新创业项目互惠互利。', lang:'cn'},
  ],
}

export const branches = {
  'cn': {name:'常设分支机构/委员会',value: ["深圳-华盛顿生物医药技术转化中心","深圳-美国国际教育服务中心","深圳-美国IT技术中心","专业人才委员会", "项目投资引导委员会"], lang:'cn'},
  'eng': {name:'Permanent Branches/Committees', value: ["Biomedical Technology Center", "International Education Service Center", "IT Center", "Professional Talent Committee", "Project Investment Committee"], lang:'eng'}
}

export const president = "深圳是中国改革开放以后建立的第一个经济特区，是改革开放的试验场，也是国际社会观察中国走向的窗口。今年是改革开放四十周年，深圳作为中国改革开放的先行者，已经从一个边陲小镇发展成为有影响力的现代化国际大都市，深圳正作为粤港澳大湾区的领头羊奋勇前进。美国大华府地区集中了大量的联邦政府及国际组织机构，汇聚了众多的优质资源和优秀人才。近年来，来自深圳的各行各业的佼佼者也不断向大华府地区聚集。\n我们创立大华府地区-深圳商会的目的，就是希望搭起一个供两地商界人士交流、合作、共享的平台，为促进两地优势互补、为两地共同繁荣发展做出贡献。深圳商会成立至今吸引了各行各业的专家和精英，他们虽然来自不同领域，如生物医药、国际教育、新媒体、国际贸易、IT科技等等，但无一不被深圳的生机与活力、包容和机遇所吸引，愿意与深圳建立联系。因此，我们希望深圳商会可以成为各位与深圳联系的纽带，成为一个共同的精神家园。我也要衷心地感谢这些热情参与的专家与精英人士，商会能够顺利挂牌、开展活动，与诸位的关心与支持密不可分。\n下一步，商会将抓住以下“关键词”开展工作： \n1. 平台：大华府的优势是有人才，有政商资源；深圳的优势是有活力、有需求，商会将竭力成为两地取长补短，优势互补的平台；\n2. 凝聚：凝聚人才，凝聚项目， 凝聚资金，凝聚资源，让商会成为一个聚宝盆；\n3. 服务：服务商会会员企业，服务社区事务；\n4. 务实：讲实话 做实事 求实效，以实干赢未来；\n5. 共赢：如果能做到以上几点，共赢将是顺带的结果。\n 我坚信，一个是领先中国的一线城市，另一个则是包罗万象的发达国家，深圳与北美在互利互惠方面一定具有无比广阔的合作空间，这种合作也会给在座的各位带来数不尽的商业机会。希望更多志同道合的各行各业的朋友加入到我们的队伍。"

export const partnerShips = [
  {name:'Highland', logo:'/fake-logo-1.svg', link:'', intro:"Hiland是总部位于马里兰桑蒂斯普林的一家在全球交流领域拥有30多年的领导经验的机构, 主要致力于为学生提供在美国丰富多彩的留学生活，提供从学校选择到住宿管理、学术支持、实习管理以及知名机构合作的全方位服务。 "},
  {name:'海龙教育', logo:'/hailong.png', link:'http://www.seaedu.com.cn', intro:"海龙教育是成立于2004年总部位于深圳福田区的教育企业，拥有多个分支机构和子公司，服务涵盖外教招聘管理、留学移民服务、国际学习游学、国际理解课程开发、师资培训以及海外语言与TEFL培训等六大项目。"},
  {name:'GL Capital', logo:'/gl-logo.png', link:'', intro:"GL Capital是成立于2016年总部位于马里兰州哥伦比亚的一家私营房地产投资公司，业务主要覆盖大西洋中部地区的多户型、学生住房、混合用途和工业房地产"}
]
