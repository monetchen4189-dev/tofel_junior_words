const WORDS = [
  {
    word:"abandon",
    phonetic:"/əˈbændən/",
    pos:"v.",
    meaning:"放弃",
    collocation:"abandon hope / abandon a plan",
    grammar:"后接名词或动名词",
    examples:[
      {en:"They had to abandon the project due to lack of money.",cn:"由于缺乏资金，他们不得不放弃这个项目。"},
      {en:"The captain gave the order to abandon the sinking ship.",cn:"船长下令放弃那艘正在下沉的船。"},
      {en:"Never abandon hope, even in the darkest times.",cn:"即使在最黑暗的时刻，也不要放弃希望。"}
    ]
  },
  {
    word:"absorb",
    phonetic:"/əbˈzɔːrb/",
    pos:"v.",
    meaning:"吸收；全神贯注",
    collocation:"absorb knowledge / be absorbed in",
    grammar:"be absorbed in 表示全神贯注于",
    examples:[
      {en:"Plants absorb water and nutrients from the soil.",cn:"植物从土壤中吸收水分和养分。",meaning:"吸收"},
      {en:"She was completely absorbed in reading the novel.",cn:"她完全沉浸在阅读那本小说中。",meaning:"全神贯注"},
      {en:"Sponge can absorb liquid quickly.",cn:"海绵能快速吸收液体。",meaning:"吸收"}
    ]
  },
  {
    word:"accomplish",
    phonetic:"/əˈkɑːmplɪʃ/",
    pos:"v.",
    meaning:"完成；实现",
    collocation:"accomplish a goal / accomplish a task",
    grammar:"及物动词，后接名词",
    examples:[
      {en:"She accomplished her goal of learning English in one year.",cn:"她在一年内实现了学习英语的目标。"},
      {en:"The team accomplished the task ahead of schedule.",cn:"团队提前完成了任务。"},
      {en:"You can accomplish anything if you work hard.",cn:"如果你努力工作，你可以实现任何事情。"}
    ]
  },
  {
    word:"accurate",
    phonetic:"/ˈækjərət/",
    pos:"adj.",
    meaning:"准确的；精确的",
    collocation:"accurate information / accurate measurement",
    grammar:"副词形式为 accurately",
    examples:[
      {en:"The information in the report is accurate.",cn:"报告中的信息是准确的。"},
      {en:"Scientists need to make accurate measurements.",cn:"科学家需要进行精确的测量。"},
      {en:"Her prediction was surprisingly accurate.",cn:"她的预测出奇地准确。"}
    ]
  },
  {
    word:"achieve",
    phonetic:"/əˈtʃiːv/",
    pos:"v.",
    meaning:"达到；取得",
    collocation:"achieve success / achieve a goal",
    grammar:"及物动词，后接名词",
    examples:[
      {en:"He achieved great success in his career.",cn:"他在事业上取得了巨大成功。"},
      {en:"She worked hard to achieve her dream.",cn:"她努力工作以实现她的梦想。"},
      {en:"The team achieved their target for this quarter.",cn:"团队达到了本季度的目标。"}
    ]
  },
  {
    word:"adapt",
    phonetic:"/əˈdæpt/",
    pos:"v.",
    meaning:"适应；改编",
    collocation:"adapt to / adapt for",
    grammar:"adapt to + 名词 表示适应",
    examples:[
      {en:"It took time to adapt to the new school.",cn:"适应新学校花了一些时间。",meaning:"适应"},
      {en:"The novel was adapted into a movie.",cn:"这部小说被改编成了电影。",meaning:"改编"},
      {en:"Animals adapt to their environment to survive.",cn:"动物适应环境以求生存。",meaning:"适应"}
    ]
  },
  {
    word:"adequate",
    phonetic:"/ˈædɪkwət/",
    pos:"adj.",
    meaning:"足够的；充分的",
    collocation:"adequate time / adequate preparation",
    grammar:"副词形式为 adequately",
    examples:[
      {en:"We need adequate preparation for the exam.",cn:"我们需要为考试做充分准备。"},
      {en:"There is adequate food for everyone.",cn:"有足够的食物给每个人。"},
      {en:"The salary is adequate for a comfortable life.",cn:"这份薪水足以过上舒适的生活。"}
    ]
  },
  {
    word:"adjust",
    phonetic:"/əˈdʒʌst/",
    pos:"v.",
    meaning:"调整；适应",
    collocation:"adjust to / adjust the settings",
    grammar:"adjust to + 名词 表示适应",
    examples:[
      {en:"She adjusted to the new environment quickly.",cn:"她很快适应了新环境。",meaning:"适应"},
      {en:"Please adjust the chair to a comfortable height.",cn:"请把椅子调整到舒适的高度。",meaning:"调整"},
      {en:"You can adjust the volume with this button.",cn:"你可以用这个按钮调节音量。",meaning:"调整"}
    ]
  },
  {
    word:"admire",
    phonetic:"/ədˈmaɪər/",
    pos:"v.",
    meaning:"钦佩；欣赏",
    collocation:"admire someone for / admire the view",
    grammar:"admire sb for sth 因某事钦佩某人",
    examples:[
      {en:"I admire her for her courage.",cn:"我钦佩她的勇气。",meaning:"钦佩"},
      {en:"We stopped to admire the beautiful sunset.",cn:"我们停下来欣赏美丽的日落。",meaning:"欣赏"},
      {en:"Everyone admires his dedication to work.",cn:"每个人都钦佩他对工作的奉献精神。",meaning:"钦佩"}
    ]
  },
  {
    word:"adopt",
    phonetic:"/əˈdɑːpt/",
    pos:"v.",
    meaning:"采纳；收养",
    collocation:"adopt a method / adopt a child",
    grammar:"及物动词，后接名词",
    examples:[
      {en:"The school adopted a new teaching method.",cn:"学校采用了新的教学方法。",meaning:"采纳"},
      {en:"They decided to adopt a child from the orphanage.",cn:"他们决定从孤儿院收养一个孩子。",meaning:"收养"},
      {en:"The company adopted new policies to improve efficiency.",cn:"公司采用了新政策来提高效率。",meaning:"采纳"}
    ]
  },
  {
    word:"advantage",
    phonetic:"/ədˈvæntɪdʒ/",
    pos:"n.",
    meaning:"优势；好处",
    collocation:"take advantage of / have an advantage",
    grammar:"take advantage of 利用",
    examples:[
      {en:"Taking advantage of every opportunity is important.",cn:"利用每一个机会很重要。"},
      {en:"Being bilingual gives you an advantage in the job market.",cn:"掌握两种语言在就业市场上给你优势。"},
      {en:"One advantage of living in the city is easy access to public transport.",cn:"住在城市的一个好处是方便使用公共交通。"}
    ]
  },
  {
    word:"adventure",
    phonetic:"/ədˈventʃər/",
    pos:"n.",
    meaning:"冒险；奇遇",
    collocation:"go on an adventure / adventure story",
    grammar:"可数名词",
    examples:[
      {en:"The children went on an adventure in the forest.",cn:"孩子们在森林里进行了一次冒险。"},
      {en:"He wrote a book about his adventures in Africa.",cn:"他写了一本关于他在非洲冒险经历的书。"},
      {en:"Life is full of unexpected adventures.",cn:"生活充满了意想不到的奇遇。"}
    ]
  },
  {
    word:"affect",
    phonetic:"/əˈfekt/",
    pos:"v.",
    meaning:"影响",
    collocation:"affect the result / be affected by",
    grammar:"及物动词，注意与 effect(n.) 区分",
    examples:[
      {en:"The weather affected our travel plans.",cn:"天气影响了我们的旅行计划。"},
      {en:"Smoking can seriously affect your health.",cn:"吸烟会严重影响你的健康。"},
      {en:"The economic crisis affected businesses worldwide.",cn:"经济危机影响了全球的企业。"}
    ]
  },
  {
    word:"afford",
    phonetic:"/əˈfɔːrd/",
    pos:"v.",
    meaning:"负担得起",
    collocation:"can't afford / afford to buy",
    grammar:"常与 can/can't 连用",
    examples:[
      {en:"I can't afford to buy a new car right now.",cn:"我现在买不起新车。"},
      {en:"Not everyone can afford a college education.",cn:"不是每个人都能负担得起大学教育。"},
      {en:"We can't afford to waste any more time.",cn:"我们浪费不起更多时间了。"}
    ]
  },
  {
    word:"aggressive",
    phonetic:"/əˈɡresɪv/",
    pos:"adj.",
    meaning:"好斗的；积极的",
    collocation:"aggressive behavior / aggressive strategy",
    grammar:"副词形式为 aggressively",
    examples:[
      {en:"He became aggressive when he was angry.",cn:"他生气时变得好斗。",meaning:"好斗的"},
      {en:"The company adopted an aggressive marketing strategy.",cn:"公司采取了积极的市场营销策略。",meaning:"积极的"},
      {en:"Aggressive behavior is not acceptable in school.",cn:"好斗的行为在学校是不可接受的。",meaning:"好斗的"}
    ]
  },
  {
    word:"ancient",
    phonetic:"/ˈeɪnʃənt/",
    pos:"adj.",
    meaning:"古代的；古老的",
    collocation:"ancient history / ancient civilization",
    grammar:"比较级为 more ancient",
    examples:[
      {en:"The ancient city has a long history.",cn:"这座古城有着悠久的历史。"},
      {en:"Ancient civilizations built impressive structures.",cn:"古代文明建造了令人印象深刻的建筑。"},
      {en:"We learned about ancient Rome in history class.",cn:"我们在历史课上学习了古罗马。"}
    ]
  },
  {
    word:"announce",
    phonetic:"/əˈnaʊns/",
    pos:"v.",
    meaning:"宣布；通知",
    collocation:"announce the result / announce a decision",
    grammar:"名词形式为 announcement",
    examples:[
      {en:"The teacher announced the exam results.",cn:"老师宣布了考试结果。"},
      {en:"They announced their engagement to the family.",cn:"他们向家人宣布了订婚的消息。"},
      {en:"The company announced a new product launch.",cn:"公司宣布推出新产品。"}
    ]
  },
  {
    word:"anxious",
    phonetic:"/ˈæŋkʃəs/",
    pos:"adj.",
    meaning:"焦虑的；渴望的",
    collocation:"be anxious about / be anxious to",
    grammar:"be anxious about 担心；be anxious to 渴望",
    examples:[
      {en:"She was anxious about the exam results.",cn:"她对考试结果感到焦虑。",meaning:"焦虑的"},
      {en:"He was anxious to meet his favorite singer.",cn:"他渴望见到他最喜欢的歌手。",meaning:"渴望的"},
      {en:"Parents are often anxious about their children's safety.",cn:"父母经常担心孩子的安全。",meaning:"焦虑的"}
    ]
  },
  {
    word:"apparent",
    phonetic:"/əˈpærənt/",
    pos:"adj.",
    meaning:"明显的；显然的",
    collocation:"it is apparent that / apparent reason",
    grammar:"副词形式为 apparently",
    examples:[
      {en:"It was apparent that he was tired.",cn:"很明显他累了。"},
      {en:"The apparent cause of the accident was speeding.",cn:"事故的明显原因是超速。"},
      {en:"Her talent for music was apparent from a young age.",cn:"她的音乐天赋从小就很明显。"}
    ]
  },
  {
    word:"appeal",
    phonetic:"/əˈpiːl/",
    pos:"v./n.",
    meaning:"呼吁；吸引",
    collocation:"appeal to / make an appeal",
    grammar:"appeal to 对...有吸引力",
    examples:[
      {en:"The idea appealed to many students.",cn:"这个想法吸引了很多学生。",meaning:"吸引"},
      {en:"The charity made an appeal for donations.",cn:"慈善机构呼吁捐款。",meaning:"呼吁"},
      {en:"This type of music doesn't appeal to me.",cn:"这种音乐不吸引我。",meaning:"吸引"}
    ]
  },
  {
    word:"appreciate",
    phonetic:"/əˈpriːʃieɪt/",
    pos:"v.",
    meaning:"感激；欣赏",
    collocation:"appreciate your help / appreciate art",
    grammar:"后接动名词 doing",
    examples:[
      {en:"I really appreciate your help with the project.",cn:"我非常感谢你对项目的帮助。",meaning:"感激"},
      {en:"She appreciates good music and art.",cn:"她欣赏好的音乐和艺术。",meaning:"欣赏"},
      {en:"We appreciate you taking the time to meet with us.",cn:"我们感谢你抽出时间与我们见面。",meaning:"感激"}
    ]
  },
  {
    word:"approach",
    phonetic:"/əˈproʊtʃ/",
    pos:"v./n.",
    meaning:"接近；方法",
    collocation:"approach a problem / a new approach",
    grammar:"作名词时后接 to",
    examples:[
      {en:"We need a new approach to this problem.",cn:"我们需要用新方法解决这个问题。",meaning:"方法"},
      {en:"Winter is approaching, and the days are getting shorter.",cn:"冬天即将来临，白天越来越短。",meaning:"接近"},
      {en:"She approached the teacher with a question.",cn:"她走向老师问问题。",meaning:"接近"}
    ]
  },
  {
    word:"appropriate",
    phonetic:"/əˈproʊpriət/",
    pos:"adj.",
    meaning:"适当的；合适的",
    collocation:"appropriate for / appropriate behavior",
    grammar:"副词形式为 appropriately",
    examples:[
      {en:"This dress is not appropriate for school.",cn:"这条裙子不适合穿去学校。"},
      {en:"It's important to use appropriate language in formal situations.",cn:"在正式场合使用适当的语言很重要。"},
      {en:"Please choose an appropriate time to discuss this matter.",cn:"请选择合适的时间讨论这件事。"}
    ]
  },
  {
    word:"approve",
    phonetic:"/əˈpruːv/",
    pos:"v.",
    meaning:"批准；赞成",
    collocation:"approve of / approve the plan",
    grammar:"approve of 赞成",
    examples:[
      {en:"My parents don't approve of my decision.",cn:"我父母不赞成我的决定。",meaning:"赞成"},
      {en:"The committee approved the budget proposal.",cn:"委员会批准了预算提案。",meaning:"批准"},
      {en:"I don't approve of cheating on exams.",cn:"我不赞成考试作弊。",meaning:"赞成"}
    ]
  },
  {
    word:"arise",
    phonetic:"/əˈraɪz/",
    pos:"v.",
    meaning:"出现；产生",
    collocation:"arise from / problems arise",
    grammar:"过去式为 arose，过去分词为 arisen",
    examples:[
      {en:"New problems arose during the project.",cn:"项目进行中出现了新问题。"},
      {en:"Conflicts can arise from misunderstandings.",cn:"冲突可能源于误解。"},
      {en:"An opportunity arose for him to study abroad.",cn:"他获得了一个出国留学的机会。"}
    ]
  },
  {
    word:"arrange",
    phonetic:"/əˈreɪndʒ/",
    pos:"v.",
    meaning:"安排；整理",
    collocation:"arrange a meeting / arrange for",
    grammar:"名词形式为 arrangement",
    examples:[
      {en:"Can you arrange a meeting for tomorrow?",cn:"你能安排明天的会议吗？"},
      {en:"She arranged the books on the shelf neatly.",cn:"她把书架上的书整理得很整齐。"},
      {en:"We need to arrange transportation to the airport.",cn:"我们需要安排去机场的交通。"}
    ]
  },
  {
    word:"assume",
    phonetic:"/əˈsuːm/",
    pos:"v.",
    meaning:"假设；承担",
    collocation:"assume that / assume responsibility",
    grammar:"名词形式为 assumption",
    examples:[
      {en:"I assume that you will come to the party.",cn:"我假设你会来参加聚会。",meaning:"假设"},
      {en:"She assumed responsibility for the mistake.",cn:"她承担了错误的责任。",meaning:"承担"},
      {en:"Let's assume the report is accurate.",cn:"让我们假设报告是准确的。",meaning:"假设"}
    ]
  },
  {
    word:"atmosphere",
    phonetic:"/ˈætməsfɪr/",
    pos:"n.",
    meaning:"气氛；大气层",
    collocation:"friendly atmosphere / the atmosphere",
    grammar:"不可数名词",
    examples:[
      {en:"The atmosphere in the classroom was friendly.",cn:"教室里的气氛很友好。",meaning:"气氛"},
      {en:"The Earth's atmosphere protects us from harmful rays.",cn:"地球的大气层保护我们免受有害射线的伤害。",meaning:"大气层"},
      {en:"The restaurant has a romantic atmosphere.",cn:"这家餐厅有浪漫的气氛。",meaning:"气氛"}
    ]
  },
  {
    word:"attach",
    phonetic:"/əˈtætʃ/",
    pos:"v.",
    meaning:"附上；连接",
    collocation:"attach to / attach importance to",
    grammar:"attach importance to 重视",
    examples:[
      {en:"Parents attach great importance to education.",cn:"父母非常重视教育。"},
      {en:"Please attach your resume to the email.",cn:"请在邮件中附上你的简历。"},
      {en:"The label is attached to the product.",cn:"标签附在产品上。"}
    ]
  },
  {
    word:"attempt",
    phonetic:"/əˈtempt/",
    pos:"v./n.",
    meaning:"尝试；企图",
    collocation:"attempt to do / make an attempt",
    grammar:"作动词后接 to do",
    examples:[
      {en:"She attempted to climb the mountain.",cn:"她尝试攀登这座山。"},
      {en:"He made an attempt to break the world record.",cn:"他尝试打破世界纪录。"},
      {en:"Don't attempt to do everything at once.",cn:"不要试图一次做完所有事情。"}
    ]
  },
  {word:"attract",phonetic:"/əˈtrækt/",pos:"v.",meaning:"吸引",collocation:"attract attention / attract visitors",grammar:"名词形式为 attraction",examples:[{en:"The beautiful scenery attracts many tourists.",cn:"美丽的风景吸引了许多游客。"},{en:"The bright colors attract children's attention.",cn:"鲜艳的颜色吸引孩子们的注意力。"},{en:"This company attracts talented people from all over the world.",cn:"这家公司吸引来自世界各地的优秀人才。"}]},
  {word:"available",phonetic:"/əˈveɪləbl/",pos:"adj.",meaning:"可用的；有空的",collocation:"available for / be available",grammar:"放在名词后作定语",examples:[{en:"Is the room available tomorrow?",cn:"明天这个房间有空吗？"},{en:"This information is available online.",cn:"这个信息可以在网上找到。"},{en:"The manager is not available at the moment.",cn:"经理此刻没空。"}]},
  {word:"balance",phonetic:"/ˈbæləns/",pos:"n./v.",meaning:"平衡",collocation:"keep balance / balance between",grammar:"keep one's balance 保持平衡",examples:[{en:"It's important to keep a balance between work and rest.",cn:"保持工作和休息的平衡很重要。"},{en:"She lost her balance and fell.",cn:"她失去平衡摔倒了。"},{en:"You need to balance your time between study and play.",cn:"你需要平衡学习和玩耍的时间。"}]},
  {word:"barrier",phonetic:"/ˈbæriər/",pos:"n.",meaning:"障碍；屏障",collocation:"language barrier / barrier to",grammar:"barrier to ...的障碍",examples:[{en:"Language is a barrier to communication.",cn:"语言是沟通的障碍。"},{en:"The Great Wall was built as a barrier against invaders.",cn:"长城是作为抵御入侵者的屏障而建造的。"},{en:"There are many barriers to success.",cn:"通往成功的路上有许多障碍。"}]},
  {word:"benefit",phonetic:"/ˈbenɪfɪt/",pos:"n./v.",meaning:"好处；受益",collocation:"benefit from / health benefits",grammar:"benefit from 从...中受益",examples:[{en:"Students benefit from reading every day.",cn:"学生从每天阅读中受益。"},{en:"Regular exercise has many health benefits.",cn:"定期锻炼有许多健康益处。"},{en:"Everyone will benefit from this new policy.",cn:"每个人都会从这项新政策中受益。"}]},
  {word:"beyond",phonetic:"/bɪˈjɑːnd/",pos:"prep.",meaning:"超出；在...之外",collocation:"beyond doubt / beyond one's ability",grammar:"表示超出范围或程度",examples:[{en:"The question is beyond my ability.",cn:"这个问题超出了我的能力。"},{en:"The beauty of the sunset is beyond description.",cn:"日落的美丽无法用语言描述。"},{en:"His house is just beyond that hill.",cn:"他的房子就在那座山的那边。"}]},
  {word:"brief",phonetic:"/briːf/",pos:"adj.",meaning:"简短的；短暂的",collocation:"in brief / brief introduction",grammar:"副词形式为 briefly",examples:[{en:"He gave a brief introduction of himself.",cn:"他做了简短的自我介绍。"},{en:"Please be brief, we don't have much time.",cn:"请简短一些，我们没有太多时间。"},{en:"In brief, the project was a success.",cn:"简而言之，这个项目是成功的。"}]},
  {word:"capable",phonetic:"/ˈkeɪpəbl/",pos:"adj.",meaning:"有能力的",collocation:"capable of / be capable of",grammar:"capable of doing 有能力做",examples:[{en:"She is capable of solving this problem.",cn:"她有能力解决这个问题。"},{en:"The team is capable of winning the championship.",cn:"这支队伍有能力赢得冠军。"},{en:"He is a very capable leader.",cn:"他是一位非常有能力的领导者。"}]},
  {word:"capture",phonetic:"/ˈkæptʃər/",pos:"v.",meaning:"捕获；吸引",collocation:"capture attention / capture the moment",grammar:"及物动词",examples:[{en:"The photo captured the beautiful moment.",cn:"照片捕捉到了美丽的瞬间。"},{en:"The police captured the thief.",cn:"警察抓住了小偷。"},{en:"Her performance captured the audience's attention.",cn:"她的表演吸引了观众的注意力。"}]},
  {word:"challenge",phonetic:"/ˈtʃælɪndʒ/",pos:"n./v.",meaning:"挑战",collocation:"face a challenge / challenge yourself",grammar:"形容词形式为 challenging",examples:[{en:"Learning a new language is a challenge.",cn:"学习一门新语言是一个挑战。"},{en:"She challenged herself to run a marathon.",cn:"她挑战自己去跑马拉松。"},{en:"We must face the challenge with courage.",cn:"我们必须勇敢地面对挑战。"}]},
  {word:"characteristic",phonetic:"/ˌkærəktəˈrɪstɪk/",pos:"n./adj.",meaning:"特征；特有的",collocation:"characteristic of / main characteristic",grammar:"可数名词",examples:[{en:"Patience is a characteristic of good teachers.",cn:"耐心是好老师的特征。"},{en:"Each culture has its own characteristic features.",cn:"每种文化都有其独特的特征。"},{en:"What are the main characteristics of this species?",cn:"这个物种的主要特征是什么？"}]},
  {word:"circumstance",phonetic:"/ˈsɜːrkəmstæns/",pos:"n.",meaning:"情况；环境",collocation:"under the circumstances / in no circumstance",grammar:"常用复数形式",examples:[{en:"Under the circumstances, we had no choice.",cn:"在这种情况下，我们别无选择。"},{en:"Never give up, no matter what the circumstances.",cn:"无论在什么情况下，都不要放弃。"},{en:"We need to consider all the circumstances before making a decision.",cn:"我们需要考虑所有情况后再做决定。"}]},
  {word:"classify",phonetic:"/ˈklæsɪfaɪ/",pos:"v.",meaning:"分类",collocation:"classify into / classify as",grammar:"名词形式为 classification",examples:[{en:"Scientists classify animals into groups.",cn:"科学家把动物分成不同的类。"},{en:"Books are classified by subject in the library.",cn:"图书馆的书按主题分类。"},{en:"How would you classify this type of music?",cn:"你会如何给这种音乐分类？"}]},
  {word:"coincidence",phonetic:"/koʊˈɪnsɪdəns/",pos:"n.",meaning:"巧合",collocation:"by coincidence / what a coincidence",grammar:"不可数名词，但可加不定冠词",examples:[{en:"What a coincidence to meet you here!",cn:"在这里遇到你真是巧合！"},{en:"By coincidence, we were wearing the same shirt.",cn:"巧合的是，我们穿着同样的衬衫。"},{en:"It was no coincidence that they arrived at the same time.",cn:"他们同时到达绝非巧合。"}]},
  {word:"communicate",phonetic:"/kəˈmjuːnɪkeɪt/",pos:"v.",meaning:"交流；沟通",collocation:"communicate with / communicate through",grammar:"名词形式为 communication",examples:[{en:"It's important to communicate with your parents.",cn:"和父母沟通很重要。"},{en:"We can communicate through email or phone.",cn:"我们可以通过电子邮件或电话沟通。"},{en:"Animals communicate in different ways.",cn:"动物以不同的方式交流。"}]},
  {word:"compare",phonetic:"/kəmˈper/",pos:"v.",meaning:"比较；对比",collocation:"compare with / compare to",grammar:"compare with 与...比较；compare to 把...比作",examples:[{en:"Compare your answer with the correct one.",cn:"把你的答案和正确的比较一下。"},{en:"The poet compared love to a rose.",cn:"诗人把爱情比作玫瑰。"},{en:"Compared to last year, prices have increased.",cn:"与去年相比，价格上涨了。"}]},
  {word:"compete",phonetic:"/kəmˈpiːt/",pos:"v.",meaning:"竞争；比赛",collocation:"compete with / compete for",grammar:"名词形式为 competition",examples:[{en:"Students compete for the scholarship.",cn:"学生们竞争奖学金。"},{en:"Our team will compete against the best teams in the country.",cn:"我们队将与全国最好的队伍比赛。"},{en:"Companies compete to attract customers.",cn:"公司竞争以吸引顾客。"}]},
  {word:"concentrate",phonetic:"/ˈkɑːnsntreɪt/",pos:"v.",meaning:"集中；专注",collocation:"concentrate on / concentrate one's attention",grammar:"concentrate on 集中注意力于",examples:[{en:"Please concentrate on your homework.",cn:"请集中注意力做作业。"},{en:"I can't concentrate with all this noise.",cn:"这么吵我无法集中注意力。"},{en:"She concentrated all her efforts on passing the exam.",cn:"她把所有精力都集中在通过考试上。"}]},
  {word:"concern",phonetic:"/kənˈsɜːrn/",pos:"v./n.",meaning:"关心；担忧",collocation:"be concerned about / concern oneself with",grammar:"be concerned about 关心，担忧",examples:[{en:"Parents are concerned about their children's safety.",cn:"父母关心孩子们的安全。"},{en:"The environment is a major concern today.",cn:"环境是当今的一个主要关注点。"},{en:"Don't concern yourself with small matters.",cn:"不要为小事操心。"}]},
  {word:"conduct",phonetic:"/kənˈdʌkt/",pos:"v.",meaning:"进行；指挥",collocation:"conduct a survey / conduct an experiment",grammar:"名词形式读音不同 /ˈkɑːndʌkt/",examples:[{en:"They conducted a survey on student habits.",cn:"他们对学生的习惯进行了一项调查。"},{en:"The orchestra was conducted by a famous musician.",cn:"管弦乐队由一位著名音乐家指挥。"},{en:"Scientists conducted experiments to test the theory.",cn:"科学家进行实验来验证这个理论。"}]},
  {word:"confident",phonetic:"/ˈkɑːnfɪdənt/",pos:"adj.",meaning:"自信的",collocation:"be confident about / confident smile",grammar:"名词形式为 confidence",examples:[{en:"She is confident about her English ability.",cn:"她对自己的英语能力很自信。"},{en:"He gave a confident answer during the interview.",cn:"面试时他给出了自信的回答。"},{en:"I feel confident that we will succeed.",cn:"我有信心我们会成功。"}]},
  {word:"confirm",phonetic:"/kənˈfɜːrm/",pos:"v.",meaning:"确认；证实",collocation:"confirm a booking / confirm the news",grammar:"名词形式为 confirmation",examples:[{en:"Please confirm your reservation by email.",cn:"请通过电子邮件确认您的预订。"},{en:"The test results confirmed the doctor's diagnosis.",cn:"检查结果证实了医生的诊断。"},{en:"Can you confirm the meeting time?",cn:"你能确认会议时间吗？"}]},
  {word:"conflict",phonetic:"/ˈkɑːnflɪkt/",pos:"n.",meaning:"冲突；矛盾",collocation:"conflict between / in conflict with",grammar:"可数名词",examples:[{en:"There was a conflict between the two groups.",cn:"两组之间发生了冲突。"},{en:"Her words were in conflict with her actions.",cn:"她的话与她的行为相矛盾。"},{en:"The conflict lasted for many years.",cn:"这场冲突持续了很多年。"}]},
  {word:"confuse",phonetic:"/kənˈfjuːz/",pos:"v.",meaning:"使困惑；混淆",collocation:"confuse A with B / be confused by",grammar:"形容词形式为 confused/confusing",examples:[{en:"Don't confuse 'affect' with 'effect'.",cn:"不要把 affect 和 effect 混淆。"},{en:"The instructions confused me.",cn:"说明书让我困惑。"},{en:"People often confuse these two words.",cn:"人们经常混淆这两个词。"}]},
  {word:"consequence",phonetic:"/ˈkɑːnsəkwens/",pos:"n.",meaning:"后果；结果",collocation:"as a consequence / face the consequences",grammar:"形容词形式为 consequent",examples:[{en:"You must face the consequences of your actions.",cn:"你必须面对你行为的后果。"},{en:"As a consequence, he lost his job.",cn:"结果，他失去了工作。"},{en:"Every action has consequences.",cn:"每个行为都有后果。"}]},
  {word:"consider",phonetic:"/kənˈsɪdər/",pos:"v.",meaning:"考虑；认为",collocation:"consider doing / consider as",grammar:"后接动名词 doing",examples:[{en:"I'm considering changing my job.",cn:"我正在考虑换工作。"},{en:"We consider him as a good friend.",cn:"我们把他当作好朋友。"},{en:"Please consider my proposal carefully.",cn:"请仔细考虑我的建议。"}]},
  {word:"constant",phonetic:"/ˈkɑːnstənt/",pos:"adj.",meaning:"持续的；不变的",collocation:"constant change / constant practice",grammar:"副词形式为 constantly",examples:[{en:"Constant practice makes perfect.",cn:"持续的练习使人完美。"},{en:"The only constant in life is change.",cn:"生活中唯一不变的就是变化。"},{en:"She is in constant contact with her family.",cn:"她与家人保持持续的联系。"}]},
  {word:"construct",phonetic:"/kənˈstrʌkt/",pos:"v.",meaning:"建造；构建",collocation:"construct a building / construct a theory",grammar:"名词形式为 construction",examples:[{en:"They are constructing a new bridge.",cn:"他们正在建造一座新桥。"},{en:"The theory was constructed based on observations.",cn:"这个理论是基于观察构建的。"},{en:"It takes time to construct a good argument.",cn:"构建一个好的论点需要时间。"}]},
  {word:"consume",phonetic:"/kənˈsuːm/",pos:"v.",meaning:"消耗；消费",collocation:"consume energy / consume food",grammar:"名词形式为 consumption",examples:[{en:"The car consumes a lot of fuel.",cn:"这辆车消耗很多燃料。"},{en:"People consume more electricity in summer.",cn:"人们在夏天消耗更多电力。"},{en:"He consumed all his savings on travel.",cn:"他把所有积蓄都花在了旅行上。"}]},
  {word:"contribute",phonetic:"/kənˈtrɪbjuːt/",pos:"v.",meaning:"贡献；捐献",collocation:"contribute to / contribute money",grammar:"contribute to 对...有贡献",examples:[{en:"Everyone should contribute to the community.",cn:"每个人都应该为社区做贡献。"},{en:"Many factors contributed to his success.",cn:"许多因素促成了他的成功。"},{en:"She contributed money to the charity.",cn:"她向慈善机构捐了钱。"}]},
  {word:"convince",phonetic:"/kənˈvɪns/",pos:"v.",meaning:"说服；使确信",collocation:"convince sb to do / convince sb of",grammar:"convince sb to do 说服某人做",examples:[{en:"I convinced him to join the club.",cn:"我说服他加入俱乐部。"},{en:"She convinced me of her honesty.",cn:"她让我相信她是诚实的。"},{en:"We need to convince the team that this plan will work.",cn:"我们需要让团队相信这个计划会成功。"}]},
  {word:"cooperate",phonetic:"/koʊˈɑːpəreɪt/",pos:"v.",meaning:"合作",collocation:"cooperate with / cooperate on",grammar:"名词形式为 cooperation",examples:[{en:"We need to cooperate with each other.",cn:"我们需要互相合作。"},{en:"The two companies cooperated on the project.",cn:"两家公司在这个项目上合作。"},{en:"Students should learn to cooperate in group activities.",cn:"学生应该学会在小组活动中合作。"}]},
  {word:"creative",phonetic:"/kriˈeɪtɪv/",pos:"adj.",meaning:"创造性的",collocation:"creative thinking / creative ideas",grammar:"副词形式为 creatively",examples:[{en:"She has many creative ideas.",cn:"她有很多有创意的想法。"},{en:"Creative thinking is important for problem solving.",cn:"创造性思维对解决问题很重要。"},{en:"The artist is known for his creative use of colors.",cn:"这位艺术家以他创造性的色彩运用而闻名。"}]},
  {word:"crucial",phonetic:"/ˈkruːʃəl/",pos:"adj.",meaning:"关键的；重要的",collocation:"crucial moment / crucial role",grammar:"同义词为 essential",examples:[{en:"This is a crucial moment for the team.",cn:"这对团队来说是一个关键时刻。"},{en:"Education plays a crucial role in development.",cn:"教育在发展中起着关键作用。"},{en:"It is crucial to follow the instructions carefully.",cn:"仔细遵循说明非常重要。"}]},
  {word:"curious",phonetic:"/ˈkjʊriəs/",pos:"adj.",meaning:"好奇的",collocation:"be curious about / curious mind",grammar:"名词形式为 curiosity",examples:[{en:"Children are curious about the world.",cn:"孩子们对世界充满好奇。"},{en:"I'm curious to know what happened.",cn:"我很好奇发生了什么。"},{en:"A curious mind leads to discovery.",cn:"好奇心带来发现。"}]},
  {word:"debate",phonetic:"/dɪˈbeɪt/",pos:"n./v.",meaning:"辩论；争论",collocation:"have a debate / debate about",grammar:"可作名词和动词",examples:[{en:"We had a debate about environmental protection.",cn:"我们进行了一场关于环保的辩论。"},{en:"The students debated the topic for hours.",cn:"学生们就这个话题辩论了几个小时。"},{en:"There is an ongoing debate about this issue.",cn:"关于这个问题有一个持续的争论。"}]},
  {word:"decline",phonetic:"/dɪˈklaɪn/",pos:"v./n.",meaning:"下降；拒绝",collocation:"decline an offer / on the decline",grammar:"比 refuse 更委婉",examples:[{en:"She politely declined the invitation.",cn:"她礼貌地拒绝了邀请。",meaning:"拒绝"},{en:"Sales have declined this quarter.",cn:"本季度销售额下降了。",meaning:"下降"},{en:"The number of tigers is on the decline.",cn:"老虎的数量正在减少。",meaning:"下降"}]},
  {word:"demonstrate",phonetic:"/ˈdemənstreɪt/",pos:"v.",meaning:"展示；证明",collocation:"demonstrate how to / demonstrate that",grammar:"名词形式为 demonstration",examples:[{en:"The teacher demonstrated how to do the experiment.",cn:"老师演示了如何做实验。"},{en:"The results demonstrate that the method works.",cn:"结果证明这个方法有效。"},{en:"Let me demonstrate the new software to you.",cn:"让我给你演示一下这个新软件。"}]},
  {word:"determine",phonetic:"/dɪˈtɜːrmɪn/",pos:"v.",meaning:"决定；确定",collocation:"determine to do / be determined to",grammar:"be determined to 下定决心",examples:[{en:"She is determined to succeed.",cn:"她下定决心要成功。"},{en:"Several factors determine the outcome.",cn:"几个因素决定结果。"},{en:"We need to determine the cause of the problem.",cn:"我们需要确定问题的原因。"}]},
  {word:"develop",phonetic:"/dɪˈveləp/",pos:"v.",meaning:"发展；开发",collocation:"develop skills / develop a habit",grammar:"名词形式为 development",examples:[{en:"Reading helps develop your vocabulary.",cn:"阅读有助于发展词汇量。"},{en:"The company is developing a new product.",cn:"公司正在开发新产品。"},{en:"Children develop at different rates.",cn:"孩子们以不同的速度发展。"}]},
  {word:"distinguish",phonetic:"/dɪˈstɪŋɡwɪʃ/",pos:"v.",meaning:"区分；辨别",collocation:"distinguish between / distinguish from",grammar:"distinguish A from B 把A和B区分开",examples:[{en:"Can you distinguish between the two words?",cn:"你能区分这两个词吗？"},{en:"It's hard to distinguish her from her twin sister.",cn:"很难把她和她的双胞胎姐姐区分开来。"},{en:"We must distinguish right from wrong.",cn:"我们必须明辨是非。"}]},
  {word:"domestic",phonetic:"/dəˈmestɪk/",pos:"adj.",meaning:"国内的；家庭的",collocation:"domestic animals / domestic market",grammar:"反义词为 foreign",examples:[{en:"Cats and dogs are domestic animals.",cn:"猫和狗是家养动物。",meaning:"家庭的"},{en:"The domestic market is growing.",cn:"国内市场正在增长。",meaning:"国内的"},{en:"She enjoys domestic life.",cn:"她享受家庭生活。",meaning:"家庭的"}]},
  {word:"dominant",phonetic:"/ˈdɑːmɪnənt/",pos:"adj.",meaning:"占主导的；显著的",collocation:"dominant position / dominant role",grammar:"动词形式为 dominate",examples:[{en:"English is the dominant language in international business.",cn:"英语是国际商务中的主导语言。"},{en:"The dominant feature of the landscape is the mountain.",cn:"这片风景的主要特征是那座山。"},{en:"He has a dominant personality.",cn:"他有主导性的性格。"}]},
  {word:"eager",phonetic:"/ˈiːɡər/",pos:"adj.",meaning:"渴望的；热切的",collocation:"be eager to / be eager for",grammar:"be eager to do 渴望做",examples:[{en:"The students were eager to learn.",cn:"学生们渴望学习。"},{en:"She is eager for success.",cn:"她渴望成功。"},{en:"He was eager to share his good news.",cn:"他急切地想分享他的好消息。"}]},
  {word:"economy",phonetic:"/ɪˈkɑːnəmi/",pos:"n.",meaning:"经济",collocation:"global economy / economy class",grammar:"形容词形式为 economic/economical",examples:[{en:"The economy is growing this year.",cn:"今年经济在增长。"},{en:"We need to practice economy in our spending.",cn:"我们需要在开支上节约。"},{en:"The global economy affects everyone.",cn:"全球经济影响着每个人。"}]},
  {word:"effective",phonetic:"/ɪˈfektɪv/",pos:"adj.",meaning:"有效的",collocation:"effective method / effective way",grammar:"副词形式为 effectively",examples:[{en:"This is an effective method for learning English.",cn:"这是一个学习英语的有效方法。"},{en:"The medicine is very effective.",cn:"这种药非常有效。"},{en:"We need to find an effective solution.",cn:"我们需要找到一个有效的解决方案。"}]},
  {word:"efficient",phonetic:"/ɪˈfɪʃnt/",pos:"adj.",meaning:"高效的",collocation:"efficient system / efficient way",grammar:"副词形式为 efficiently",examples:[{en:"The new system is more efficient.",cn:"新系统更高效。"},{en:"She is an efficient worker.",cn:"她是一个高效的工人。"},{en:"We need to use our time efficiently.",cn:"我们需要高效地利用时间。"}]},
  {word:"elaborate",phonetic:"/ɪˈlæbərət/",pos:"adj./v.",meaning:"精心制作的；详细说明",collocation:"elaborate plan / elaborate on",grammar:"作动词时重音在第二音节",examples:[{en:"They made elaborate preparations for the party.",cn:"他们为聚会做了精心准备。",meaning:"精心制作的"},{en:"Could you elaborate on your idea?",cn:"你能详细说明你的想法吗？",meaning:"详细说明"},{en:"The design is very elaborate.",cn:"这个设计非常精细。",meaning:"精心制作的"}]},
  {word:"emerge",phonetic:"/ɪˈmɜːrdʒ/",pos:"v.",meaning:"出现；浮现",collocation:"emerge from / emerge as",grammar:"名词形式为 emergence",examples:[{en:"The truth emerged after the investigation.",cn:"调查后真相浮现。"},{en:"A new leader emerged from the crisis.",cn:"危机中出现了一位新领导人。"},{en:"The moon emerged from behind the clouds.",cn:"月亮从云层后面出现了。"}]},
  {word:"emphasize",phonetic:"/ˈemfəsaɪz/",pos:"v.",meaning:"强调",collocation:"emphasize the importance / emphasize that",grammar:"名词形式为 emphasis",examples:[{en:"The teacher emphasized the importance of practice.",cn:"老师强调了练习的重要性。"},{en:"I want to emphasize that this is not acceptable.",cn:"我想强调这是不可接受的。"},{en:"She emphasized each word carefully.",cn:"她仔细地强调每个词。"}]},
  {word:"enable",phonetic:"/ɪˈneɪbl/",pos:"v.",meaning:"使能够",collocation:"enable sb to do / enable access",grammar:"enable sb to do 使某人能够做",examples:[{en:"Technology enables us to work from home.",cn:"技术使我们能够在家工作。"},{en:"The scholarship enabled her to study abroad.",cn:"奖学金使她能够出国留学。"},{en:"This feature enables faster processing.",cn:"这个功能使处理更快。"}]},
  {word:"encounter",phonetic:"/ɪnˈkaʊntər/",pos:"v./n.",meaning:"遇到；遭遇",collocation:"encounter problems / encounter difficulties",grammar:"可作动词和名词",examples:[{en:"We encountered some problems during the trip.",cn:"我们在旅途中遇到了一些问题。"},{en:"It was my first encounter with a wild animal.",cn:"那是我第一次遇到野生动物。"},{en:"She encountered many difficulties but never gave up.",cn:"她遇到了很多困难但从未放弃。"}]},
  {word:"encourage",phonetic:"/ɪnˈkɜːrɪdʒ/",pos:"v.",meaning:"鼓励",collocation:"encourage sb to do / encourage learning",grammar:"名词形式为 encouragement",examples:[{en:"My teacher encouraged me to study harder.",cn:"我的老师鼓励我更加努力学习。"},{en:"Parents should encourage their children to read.",cn:"父母应该鼓励孩子阅读。"},{en:"Her words encouraged me to keep trying.",cn:"她的话鼓励我继续尝试。"}]},
  {word:"engage",phonetic:"/ɪnˈɡeɪdʒ/",pos:"v.",meaning:"参与；吸引",collocation:"engage in / engage with",grammar:"engage in 参与",examples:[{en:"Students should engage in class discussions.",cn:"学生应该参与课堂讨论。"},{en:"The story engaged the children's attention.",cn:"故事吸引了孩子们的注意力。"},{en:"He engaged in conversation with the guests.",cn:"他与客人们交谈。"}]},
  {word:"enhance",phonetic:"/ɪnˈhæns/",pos:"v.",meaning:"增强；提高",collocation:"enhance quality / enhance ability",grammar:"名词形式为 enhancement",examples:[{en:"Reading can enhance your vocabulary.",cn:"阅读可以增强你的词汇量。"},{en:"The new features enhance the user experience.",cn:"新功能提高了用户体验。"},{en:"Exercise enhances physical fitness.",cn:"运动增强身体素质。"}]},
  {word:"enormous",phonetic:"/ɪˈnɔːrməs/",pos:"adj.",meaning:"巨大的",collocation:"enormous size / enormous amount",grammar:"比 big 更正式",examples:[{en:"The building is of enormous size.",cn:"这座建筑非常巨大。"},{en:"He spent an enormous amount of time on the project.",cn:"他在这个项目上花了大量时间。"},{en:"The problem is enormous but not impossible to solve.",cn:"问题很大但并非无法解决。"}]},
  {word:"ensure",phonetic:"/ɪnˈʃʊr/",pos:"v.",meaning:"确保",collocation:"ensure that / ensure safety",grammar:"后接 that 从句",examples:[{en:"Please ensure that all windows are closed.",cn:"请确保所有窗户都关好了。"},{en:"We need to ensure the safety of all students.",cn:"我们需要确保所有学生的安全。"},{en:"This will ensure the success of the project.",cn:"这将确保项目的成功。"}]},
  {word:"entire",phonetic:"/ɪnˈtaɪər/",pos:"adj.",meaning:"整个的；全部的",collocation:"entire family / entire day",grammar:"比 whole 更正式",examples:[{en:"The entire family went on vacation.",cn:"全家人都去度假了。"},{en:"I spent the entire day studying.",cn:"我花了一整天学习。"},{en:"The entire class passed the exam.",cn:"全班都通过了考试。"}]},
  {word:"environment",phonetic:"/ɪnˈvaɪrənmənt/",pos:"n.",meaning:"环境",collocation:"protect the environment / natural environment",grammar:"形容词形式为 environmental",examples:[{en:"We should protect the environment.",cn:"我们应该保护环境。"},{en:"Children learn best in a supportive environment.",cn:"孩子们在支持性的环境中学习最好。"},{en:"The natural environment is changing.",cn:"自然环境正在变化。"}]},
  {word:"essential",phonetic:"/ɪˈsenʃl/",pos:"adj.",meaning:"必要的；本质的",collocation:"essential for / essential to",grammar:"be essential to/for 对...必不可少",examples:[{en:"Sleep is essential for good health.",cn:"睡眠对健康是必不可少的。"},{en:"Water is essential to all living things.",cn:"水对所有生物都是必要的。"},{en:"It is essential to arrive on time.",cn:"准时到达是必要的。"}]},
  {word:"establish",phonetic:"/ɪˈstæblɪʃ/",pos:"v.",meaning:"建立；确立",collocation:"establish a company / establish a relationship",grammar:"名词形式为 establishment",examples:[{en:"The company was established in 1990.",cn:"这家公司成立于1990年。"},{en:"We need to establish clear rules.",cn:"我们需要建立明确的规则。"},{en:"She established herself as a leading expert.",cn:"她确立了自己作为顶尖专家的地位。"}]},
  {word:"estimate",phonetic:"/ˈestɪmeɪt/",pos:"v./n.",meaning:"估计；估算",collocation:"estimate the cost / rough estimate",grammar:"作名词时重音在第一音节",examples:[{en:"We estimated the cost of the project.",cn:"我们估算了项目的成本。"},{en:"The estimated time of arrival is 3 pm.",cn:"预计到达时间是下午3点。"},{en:"Can you give me a rough estimate?",cn:"你能给我一个粗略的估计吗？"}]},
  {word:"evaluate",phonetic:"/ɪˈvæljueɪt/",pos:"v.",meaning:"评估；评价",collocation:"evaluate the situation / evaluate performance",grammar:"名词形式为 evaluation",examples:[{en:"Teachers evaluate students' performance.",cn:"老师评估学生的表现。"},{en:"We need to evaluate the risks.",cn:"我们需要评估风险。"},{en:"The committee will evaluate all proposals.",cn:"委员会将评估所有提案。"}]},
  {word:"eventual",phonetic:"/ɪˈventʃuəl/",pos:"adj.",meaning:"最终的",collocation:"eventual success / eventual outcome",grammar:"副词形式为 eventually",examples:[{en:"His hard work led to eventual success.",cn:"他的努力工作带来了最终的成功。"},{en:"The eventual outcome was positive.",cn:"最终的结果是积极的。"},{en:"She eventually achieved her goal.",cn:"她最终实现了她的目标。"}]},
  {word:"evident",phonetic:"/ˈevɪdənt/",pos:"adj.",meaning:"明显的",collocation:"it is evident that / evident from",grammar:"副词形式为 evidently",examples:[{en:"It was evident that she was nervous.",cn:"很明显她很紧张。"},{en:"The improvement is evident.",cn:"进步是明显的。"},{en:"It is evident from his expression that he is happy.",cn:"从他的表情可以明显看出他很高兴。"}]},
  {word:"evolve",phonetic:"/ɪˈvɑːlv/",pos:"v.",meaning:"进化；发展",collocation:"evolve from / evolve into",grammar:"名词形式为 evolution",examples:[{en:"Species evolve over millions of years.",cn:"物种在数百万年间进化。"},{en:"The company evolved from a small business.",cn:"这家公司由一个小企业发展而来。"},{en:"The plan evolved into something much bigger.",cn:"这个计划发展成了更大的项目。"}]},
  {word:"examine",phonetic:"/ɪɡˈzæmɪn/",pos:"v.",meaning:"检查；审查",collocation:"examine the evidence / examine closely",grammar:"名词形式为 examination",examples:[{en:"The doctor examined the patient carefully.",cn:"医生仔细检查了病人。"},{en:"We need to examine all the evidence.",cn:"我们需要审查所有证据。"},{en:"Scientists examined the samples under a microscope.",cn:"科学家在显微镜下检查了样本。"}]},
  {word:"exceed",phonetic:"/ɪkˈsiːd/",pos:"v.",meaning:"超过",collocation:"exceed the limit / exceed expectations",grammar:"名词形式为 excess",examples:[{en:"The results exceeded our expectations.",cn:"结果超出了我们的预期。"},{en:"Don't exceed the speed limit.",cn:"不要超过限速。"},{en:"His performance exceeded all previous records.",cn:"他的表现超过了所有以前的记录。"}]},
  {word:"exchange",phonetic:"/ɪksˈtʃeɪndʒ/",pos:"v./n.",meaning:"交换；交流",collocation:"exchange ideas / exchange gifts",grammar:"可作动词和名词",examples:[{en:"Students can exchange ideas in class.",cn:"学生可以在课堂上交流想法。"},{en:"They exchanged gifts during the holiday.",cn:"他们在假期交换了礼物。"},{en:"There was an exchange of opinions.",cn:"有一次意见交流。"}]},
  {word:"exclude",phonetic:"/ɪkˈskluːd/",pos:"v.",meaning:"排除；不包括",collocation:"exclude from / exclude the possibility",grammar:"反义词为 include",examples:[{en:"Please don't exclude anyone from the activity.",cn:"请不要把任何人排除在活动之外。"},{en:"We cannot exclude the possibility of rain.",cn:"我们不能排除下雨的可能性。"},{en:"The price excludes tax.",cn:"价格不包括税。"}]},
  {word:"expand",phonetic:"/ɪkˈspænd/",pos:"v.",meaning:"扩大；扩展",collocation:"expand business / expand knowledge",grammar:"名词形式为 expansion",examples:[{en:"The company plans to expand its business.",cn:"公司计划扩大业务。"},{en:"Reading helps expand your knowledge.",cn:"阅读有助于扩展你的知识。"},{en:"The city is expanding rapidly.",cn:"城市正在快速扩张。"}]},
  {word:"expect",phonetic:"/ɪkˈspekt/",pos:"v.",meaning:"期待；预期",collocation:"expect to do / expect that",grammar:"名词形式为 expectation",examples:[{en:"I expect to finish the work by Friday.",cn:"我预期在周五前完成工作。"},{en:"We expect great things from you.",cn:"我们对你寄予厚望。"},{en:"The weather is better than expected.",cn:"天气比预期的好。"}]},
  {word:"expert",phonetic:"/ˈekspɜːrt/",pos:"n.",meaning:"专家",collocation:"an expert in / expert advice",grammar:"形容词形式也为 expert",examples:[{en:"She is an expert in this field.",cn:"她是这个领域的专家。"},{en:"We need expert advice on this matter.",cn:"我们需要专家对这个问题的建议。"},{en:"He became an expert through years of practice.",cn:"他通过多年的练习成为了专家。"}]},
  {word:"explain",phonetic:"/ɪkˈspleɪn/",pos:"v.",meaning:"解释",collocation:"explain to / explain why",grammar:"名词形式为 explanation",examples:[{en:"Can you explain this to me?",cn:"你能给我解释一下这个吗？"},{en:"He explained why he was late.",cn:"他解释了他为什么迟到。"},{en:"Please explain your reasoning.",cn:"请解释你的推理。"}]},
  {word:"explicit",phonetic:"/ɪkˈsplɪsɪt/",pos:"adj.",meaning:"明确的；清楚的",collocation:"explicit instructions / explicit statement",grammar:"反义词为 implicit",examples:[{en:"The instructions were explicit.",cn:"说明很明确。"},{en:"She made an explicit statement about her intentions.",cn:"她对她的意图做了明确的声明。"},{en:"The rules are explicit about this.",cn:"规则对此很明确。"}]},
  {word:"explore",phonetic:"/ɪkˈsplɔːr/",pos:"v.",meaning:"探索；探究",collocation:"explore the area / explore possibilities",grammar:"名词形式为 exploration",examples:[{en:"Scientists explore the ocean depths.",cn:"科学家探索海洋深处。"},{en:"We need to explore all possibilities.",cn:"我们需要探究所有可能性。"},{en:"Children love to explore new places.",cn:"孩子们喜欢探索新地方。"}]},
  {word:"expose",phonetic:"/ɪkˈspoʊz/",pos:"v.",meaning:"暴露；使接触",collocation:"expose to / be exposed to",grammar:"be exposed to 接触到",examples:[{en:"Children should be exposed to different cultures.",cn:"孩子们应该接触不同的文化。"},{en:"Don't expose your skin to the sun for too long.",cn:"不要把皮肤暴露在阳光下太久。"},{en:"The investigation exposed the truth.",cn:"调查揭露了真相。"}]},
  {word:"extend",phonetic:"/ɪkˈstend/",pos:"v.",meaning:"延伸；扩大",collocation:"extend the deadline / extend to",grammar:"名词形式为 extension",examples:[{en:"Can you extend the deadline by one week?",cn:"你能把截止日期延长一周吗？"},{en:"The road extends for miles.",cn:"这条路延伸了数英里。"},{en:"They extended a warm welcome to the guests.",cn:"他们向客人表示热烈欢迎。"}]},
  {word:"extinct",phonetic:"/ɪkˈstɪŋkt/",pos:"adj.",meaning:"灭绝的；消亡的",collocation:"become extinct / extinct animals",grammar:"名词形式为 extinction",examples:[{en:"Many animals are in danger of becoming extinct.",cn:"许多动物面临灭绝的危险。"},{en:"Dinosaurs have been extinct for millions of years.",cn:"恐龙已经灭绝数百万年了。"},{en:"Some languages are becoming extinct.",cn:"一些语言正在消亡。"}]},
  {word:"extraordinary",phonetic:"/ɪkˈstrɔːrdəneri/",pos:"adj.",meaning:"非凡的；特别的",collocation:"extraordinary achievement / extraordinary talent",grammar:"比 special 更强调超出寻常",examples:[{en:"She has an extraordinary memory.",cn:"她有非凡的记忆力。"},{en:"It was an extraordinary achievement.",cn:"那是一个非凡的成就。"},{en:"His talent is quite extraordinary.",cn:"他的天赋相当非凡。"}]},
  {word:"facilitate",phonetic:"/fəˈsɪlɪteɪt/",pos:"v.",meaning:"促进；使便利",collocation:"facilitate learning / facilitate communication",grammar:"及物动词，不用于进行时",examples:[{en:"Technology facilitates communication.",cn:"技术促进了沟通。"},{en:"The new system will facilitate the process.",cn:"新系统将使流程更便利。"},{en:"Good teaching facilitates learning.",cn:"好的教学促进学习。"}]},
  {word:"factor",phonetic:"/ˈfæktər/",pos:"n.",meaning:"因素",collocation:"key factor / contributing factor",grammar:"可数名词",examples:[{en:"Hard work is a key factor in success.",cn:"努力是成功的关键因素。"},{en:"There are many factors to consider.",cn:"有许多因素需要考虑。"},{en:"Weather is an important factor in agriculture.",cn:"天气是农业的一个重要因素。"}]},
  {word:"feature",phonetic:"/ˈfiːtʃər/",pos:"n./v.",meaning:"特征；特色",collocation:"main feature / feature of",grammar:"可数名词",examples:[{en:"The phone has many new features.",cn:"这款手机有很多新功能。"},{en:"The main feature of the park is the lake.",cn:"公园的主要特色是湖泊。"},{en:"The magazine features articles on health.",cn:"这本杂志刊登关于健康的文章。"}]},
  {word:"flexible",phonetic:"/ˈfleksəbl/",pos:"adj.",meaning:"灵活的；可变通的",collocation:"flexible schedule / flexible thinking",grammar:"名词形式为 flexibility",examples:[{en:"We need a more flexible schedule.",cn:"我们需要更灵活的时间表。"},{en:"Be flexible and adapt to changes.",cn:"要灵活并适应变化。"},{en:"She has a flexible approach to problem solving.",cn:"她解决问题的方法很灵活。"}]},
  {word:"fluent",phonetic:"/ˈfluːənt/",pos:"adj.",meaning:"流利的",collocation:"fluent in / fluent English",grammar:"名词形式为 fluency",examples:[{en:"She is fluent in three languages.",cn:"她能流利地说三种语言。"},{en:"He speaks fluent English.",cn:"他说一口流利的英语。"},{en:"Fluency comes with practice.",cn:"流利来自于练习。"}]},
  {word:"focus",phonetic:"/ˈfoʊkəs/",pos:"v./n.",meaning:"集中；焦点",collocation:"focus on / lose focus",grammar:"focus on 集中于",examples:[{en:"Please focus on the lesson.",cn:"请集中注意力听课。"},{en:"The focus of the meeting was on safety.",cn:"会议的焦点是安全问题。"},{en:"She lost focus during the long lecture.",cn:"她在长时间的讲座中失去了注意力。"}]},
  {word:"former",phonetic:"/ˈfɔːrmər/",pos:"adj.",meaning:"以前的；前者",collocation:"the former / former president",grammar:"the former... the latter... 前者...后者...",examples:[{en:"The former option is better.",cn:"前一个选择更好。"},{en:"He is a former teacher.",cn:"他以前是一名老师。"},{en:"Between the two options, I prefer the former.",cn:"在两个选择之间，我更喜欢前者。"}]},
  {word:"foundation",phonetic:"/faʊnˈdeɪʃn/",pos:"n.",meaning:"基础；基金会",collocation:"lay a foundation / solid foundation",grammar:"lay the foundation for 为...打基础",examples:[{en:"Good habits lay the foundation for success.",cn:"好习惯为成功打下基础。"},{en:"The foundation of the building is strong.",cn:"这栋建筑的地基很牢固。"},{en:"She works for a charitable foundation.",cn:"她在一个慈善基金会工作。"}]},
  {word:"frequent",phonetic:"/ˈfriːkwənt/",pos:"adj.",meaning:"频繁的",collocation:"frequent practice / frequent visits",grammar:"副词形式为 frequently",examples:[{en:"Frequent practice is important for learning.",cn:"频繁的练习对学习很重要。"},{en:"He makes frequent visits to his parents.",cn:"他经常去看望父母。"},{en:"Frequent breaks help maintain focus.",cn:"频繁的休息有助于保持注意力。"}]},
  {word:"frustrate",phonetic:"/frʌˈstreɪt/",pos:"v.",meaning:"使沮丧；使挫败",collocation:"be frustrated by / frustrate plans",grammar:"形容词形式为 frustrated/frustrating",examples:[{en:"Don't let small problems frustrate you.",cn:"不要让小问题使你沮丧。"},{en:"She was frustrated by the delay.",cn:"她因延误而感到沮丧。"},{en:"The bad weather frustrated our plans.",cn:"恶劣的天气使我们的计划受挫。"}]},
  {word:"fundamental",phonetic:"/ˌfʌndəˈmentl/",pos:"adj.",meaning:"基本的；根本的",collocation:"fundamental principle / fundamental change",grammar:"同义词为 basic/essential",examples:[{en:"Reading is a fundamental skill.",cn:"阅读是一项基本技能。"},{en:"There is a fundamental difference between them.",cn:"他们之间有根本的区别。"},{en:"Freedom is a fundamental human right.",cn:"自由是一项基本人权。"}]},
  {word:"generate",phonetic:"/ˈdʒenəreɪt/",pos:"v.",meaning:"产生；生成",collocation:"generate electricity / generate interest",grammar:"名词形式为 generation",examples:[{en:"Wind power generates electricity.",cn:"风力发电。"},{en:"The news generated a lot of interest.",cn:"这条新闻引起了很大兴趣。"},{en:"We need to generate new ideas.",cn:"我们需要产生新的想法。"}]},
  {word:"genuine",phonetic:"/ˈdʒenjuɪn/",pos:"adj.",meaning:"真正的；真诚的",collocation:"genuine concern / genuine smile",grammar:"比 real 更强调真实性",examples:[{en:"She showed genuine interest in the topic.",cn:"她对这个话题表现出真正的兴趣。"},{en:"Is this a genuine diamond?",cn:"这是一颗真正的钻石吗？"},{en:"He has a genuine desire to help others.",cn:"他真心想帮助别人。"}]},
  {word:"global",phonetic:"/ˈɡloʊbl/",pos:"adj.",meaning:"全球的",collocation:"global warming / global economy",grammar:"名词形式为 globalization",examples:[{en:"Global warming is a serious problem.",cn:"全球变暖是一个严重的问题。"},{en:"The company has a global presence.",cn:"这家公司有全球业务。"},{en:"We need a global approach to this issue.",cn:"我们需要用全球性的方法来处理这个问题。"}]},
  {word:"gradual",phonetic:"/ˈɡrædʒuəl/",pos:"adj.",meaning:"逐渐的",collocation:"gradual change / gradual improvement",grammar:"副词形式为 gradually",examples:[{en:"There has been a gradual improvement in his grades.",cn:"他的成绩在逐渐提高。"},{en:"The change was gradual but noticeable.",cn:"变化是逐渐的但很明显。"},{en:"Gradually, he became more confident.",cn:"渐渐地，他变得更自信了。"}]},
  {word:"guarantee",phonetic:"/ˌɡærənˈtiː/",pos:"v./n.",meaning:"保证；担保",collocation:"guarantee that / under guarantee",grammar:"可作动词和名词",examples:[{en:"Hard work doesn't guarantee success.",cn:"努力工作不能保证成功。"},{en:"The product comes with a two-year guarantee.",cn:"这个产品有两年的保修期。"},{en:"I can guarantee that you will be satisfied.",cn:"我可以保证你会满意。"}]},
  {word:"hesitate",phonetic:"/ˈhezɪteɪt/",pos:"v.",meaning:"犹豫",collocation:"hesitate to do / don't hesitate",grammar:"名词形式为 hesitation",examples:[{en:"Don't hesitate to ask questions.",cn:"不要犹豫，尽管提问。"},{en:"She hesitated before answering.",cn:"她在回答前犹豫了一下。"},{en:"If you need help, don't hesitate to call.",cn:"如果你需要帮助，不要犹豫，打电话给我。"}]},
  {word:"identify",phonetic:"/aɪˈdentɪfaɪ/",pos:"v.",meaning:"识别；确认",collocation:"identify the problem / identify with",grammar:"名词形式为 identification",examples:[{en:"Can you identify the problem?",cn:"你能确认问题是什么吗？"},{en:"It's hard to identify the cause.",cn:"很难确定原因。"},{en:"Many people identify with this character.",cn:"很多人认同这个角色。"}]},
  {word:"illustrate",phonetic:"/ˈɪləstreɪt/",pos:"v.",meaning:"说明；图解",collocation:"illustrate the point / illustrate with examples",grammar:"名词形式为 illustration",examples:[{en:"Let me illustrate this with an example.",cn:"让我用一个例子来说明。"},{en:"The book is illustrated with beautiful pictures.",cn:"这本书配有漂亮的插图。"},{en:"This example illustrates my point.",cn:"这个例子说明了我的观点。"}]},
  {word:"immediate",phonetic:"/ɪˈmiːdiət/",pos:"adj.",meaning:"立即的；直接的",collocation:"immediate action / immediate result",grammar:"副词形式为 immediately",examples:[{en:"We need immediate action.",cn:"我们需要立即行动。"},{en:"She recognized him immediately.",cn:"她立刻认出了他。"},{en:"The immediate area was evacuated.",cn:"附近区域被疏散了。"}]},
  {word:"impact",phonetic:"/ˈɪmpækt/",pos:"n./v.",meaning:"影响；冲击",collocation:"have an impact on / impact on",grammar:"have an impact on 对...有影响",examples:[{en:"Technology has a great impact on education.",cn:"技术对教育有很大影响。"},{en:"The decision will impact many people.",cn:"这个决定将影响很多人。"},{en:"What is the environmental impact?",cn:"环境影响是什么？"}]},
  {word:"implement",phonetic:"/ˈɪmplɪment/",pos:"v.",meaning:"实施；执行",collocation:"implement a plan / implement changes",grammar:"名词形式为 implementation",examples:[{en:"The school implemented a new policy.",cn:"学校实施了一项新政策。"},{en:"We need to implement the plan carefully.",cn:"我们需要仔细执行这个计划。"},{en:"The changes will be implemented next month.",cn:"这些变化将在下个月实施。"}]},
  {word:"imply",phonetic:"/ɪmˈplaɪ/",pos:"v.",meaning:"暗示；意味着",collocation:"imply that / implied meaning",grammar:"名词形式为 implication",examples:[{en:"His words implied that he was not happy.",cn:"他的话暗示他不高兴。"},{en:"What do you imply by that?",cn:"你那样说是什么意思？"},{en:"Silence implies consent.",cn:"沉默意味着同意。"}]},
  {word:"impose",phonetic:"/ɪmˈpoʊz/",pos:"v.",meaning:"强加；征收",collocation:"impose on / impose a tax",grammar:"impose...on... 把...强加于...",examples:[{en:"Don't impose your ideas on others.",cn:"不要把你的想法强加给别人。"},{en:"The government imposed a new tax.",cn:"政府征收了新税。"},{en:"I don't want to impose on you.",cn:"我不想给你添麻烦。"}]},
  {word:"impress",phonetic:"/ɪmˈpres/",pos:"v.",meaning:"使印象深刻",collocation:"be impressed by / impress sb with",grammar:"形容词形式为 impressive/impressed",examples:[{en:"She impressed the teacher with her answer.",cn:"她的回答给老师留下了深刻印象。"},{en:"I was impressed by his performance.",cn:"他的表现给我留下了深刻印象。"},{en:"The museum impressed the visitors.",cn:"博物馆给游客留下了深刻印象。"}]},
  {word:"improve",phonetic:"/ɪmˈpruːv/",pos:"v.",meaning:"改善；提高",collocation:"improve skills / improve quality",grammar:"名词形式为 improvement",examples:[{en:"Practice helps improve your skills.",cn:"练习有助于提高你的技能。"},{en:"The company is working to improve quality.",cn:"公司正在努力提高质量。"},{en:"There has been a significant improvement.",cn:"有了显著的改善。"}]},
  {word:"include",phonetic:"/ɪnˈkluːd/",pos:"v.",meaning:"包括；包含",collocation:"include in / include as",grammar:"反义词为 exclude",examples:[{en:"The price includes breakfast.",cn:"价格包括早餐。"},{en:"Please include your contact information.",cn:"请包括你的联系信息。"},{en:"The list includes ten items.",cn:"列表包括十个项目。"}]},
  {word:"increase",phonetic:"/ɪnˈkriːs/",pos:"v./n.",meaning:"增加；增长",collocation:"increase by / increase in",grammar:"可作动词和名词",examples:[{en:"Sales increased by 20%.",cn:"销售额增长了20%。"},{en:"There has been an increase in demand.",cn:"需求有所增加。"},{en:"Prices are increasing.",cn:"价格在上涨。"}]},
  {word:"indicate",phonetic:"/ˈɪndɪkeɪt/",pos:"v.",meaning:"表明；指示",collocation:"indicate that / indicate the direction",grammar:"名词形式为 indication",examples:[{en:"The results indicate that the method works.",cn:"结果表明这个方法有效。"},{en:"Please indicate your choice.",cn:"请表明你的选择。"},{en:"Studies indicate a link between diet and health.",cn:"研究表明饮食与健康有关。"}]},
  {word:"individual",phonetic:"/ˌɪndəˈvɪdʒuəl/",pos:"adj./n.",meaning:"个人的；个体",collocation:"individual needs / each individual",grammar:"比 person 更正式",examples:[{en:"Each student has individual needs.",cn:"每个学生都有个人需求。"},{en:"We should respect individual differences.",cn:"我们应该尊重个体差异。"},{en:"Every individual matters.",cn:"每个个体都很重要。"}]},
  {word:"influence",phonetic:"/ˈɪnfluəns/",pos:"n./v.",meaning:"影响",collocation:"have influence on / influence sb to do",grammar:"have influence on 对...有影响",examples:[{en:"Parents have a great influence on their children.",cn:"父母对孩子有很大影响。"},{en:"He was influenced by his teacher.",cn:"他受到了老师的影响。"},{en:"The media has a strong influence on public opinion.",cn:"媒体对舆论有很大影响。"}]},
  {word:"initial",phonetic:"/ɪˈnɪʃl/",pos:"adj.",meaning:"最初的；开始的",collocation:"initial reaction / initial plan",grammar:"副词形式为 initially",examples:[{en:"My initial reaction was surprise.",cn:"我最初的反应是惊讶。"},{en:"The initial plan was changed.",cn:"最初的计划被改变了。"},{en:"Initially, I didn't understand.",cn:"起初，我不明白。"}]},
  {word:"innovation",phonetic:"/ˌɪnəˈveɪʃn/",pos:"n.",meaning:"创新",collocation:"technological innovation / encourage innovation",grammar:"动词形式为 innovate",examples:[{en:"Innovation is important for business growth.",cn:"创新对业务增长很重要。"},{en:"The company encourages innovation.",cn:"公司鼓励创新。"},{en:"Technological innovation has changed our lives.",cn:"技术创新改变了我们的生活。"}]},
  {word:"inspire",phonetic:"/ɪnˈspaɪər/",pos:"v.",meaning:"激励；启发",collocation:"inspire sb to do / inspire confidence",grammar:"名词形式为 inspiration",examples:[{en:"Her story inspired many people.",cn:"她的故事激励了很多人。"},{en:"The teacher inspired students to work harder.",cn:"老师激励学生更加努力。"},{en:"Nature inspires artists.",cn:"自然启发艺术家。"}]},
  {word:"intelligent",phonetic:"/ɪnˈtelɪdʒənt/",pos:"adj.",meaning:"聪明的；智能的",collocation:"intelligent person / intelligent decision",grammar:"名词形式为 intelligence",examples:[{en:"Dolphins are very intelligent animals.",cn:"海豚是非常聪明的动物。"},{en:"She made an intelligent decision.",cn:"她做了一个明智的决定。"},{en:"Artificial intelligence is developing rapidly.",cn:"人工智能正在快速发展。"}]},
  {word:"interpret",phonetic:"/ɪnˈtɜːrprɪt/",pos:"v.",meaning:"解释；口译",collocation:"interpret as / interpret data",grammar:"名词形式为 interpretation",examples:[{en:"How do you interpret this data?",cn:"你如何解释这些数据？"},{en:"She interpreted for the visitors.",cn:"她为访客做口译。"},{en:"The results can be interpreted in different ways.",cn:"结果可以用不同的方式解释。"}]},
  {word:"investigate",phonetic:"/ɪnˈvestɪɡeɪt/",pos:"v.",meaning:"调查；研究",collocation:"investigate the case / investigate the cause",grammar:"名词形式为 investigation",examples:[{en:"The police investigated the crime.",cn:"警方调查了这起犯罪。"},{en:"Scientists are investigating the cause.",cn:"科学家正在调查原因。"},{en:"We need to investigate further.",cn:"我们需要进一步调查。"}]},
  {word:"involve",phonetic:"/ɪnˈvɑːlv/",pos:"v.",meaning:"涉及；包含",collocation:"be involved in / involve doing",grammar:"后接动名词 doing",examples:[{en:"The project involves a lot of research.",cn:"这个项目涉及大量研究。"},{en:"She is involved in many activities.",cn:"她参与了许多活动。"},{en:"The job involves traveling.",cn:"这份工作需要出差。"}]},
  {word:"isolate",phonetic:"/ˈaɪsəleɪt/",pos:"v.",meaning:"隔离；孤立",collocation:"be isolated from / isolate the problem",grammar:"形容词形式为 isolated",examples:[{en:"The patient was isolated from others.",cn:"病人被与他人隔离开来。"},{en:"Don't isolate yourself from friends.",cn:"不要把自己和朋友隔离开。"},{en:"We need to isolate the problem.",cn:"我们需要隔离问题。"}]},
  {word:"justify",phonetic:"/ˈdʒʌstɪfaɪ/",pos:"v.",meaning:"证明...正当；为...辩护",collocation:"justify doing / be justified in",grammar:"名词形式为 justification",examples:[{en:"How can you justify such behavior?",cn:"你如何证明这种行为是正当的？"},{en:"The end does not justify the means.",cn:"目的不能证明手段的正当性。"},{en:"He tried to justify his decision.",cn:"他试图为他的决定辩护。"}]},
  {word:"launch",phonetic:"/lɔːntʃ/",pos:"v.",meaning:"发射；发起",collocation:"launch a campaign / launch a product",grammar:"可作名词和动词",examples:[{en:"The company launched a new product.",cn:"公司推出了一款新产品。"},{en:"They launched a rocket into space.",cn:"他们向太空发射了一枚火箭。"},{en:"The campaign was launched last month.",cn:"活动上个月启动了。"}]},
  {word:"maintain",phonetic:"/meɪnˈteɪn/",pos:"v.",meaning:"维持；保持",collocation:"maintain health / maintain a relationship",grammar:"名词形式为 maintenance",examples:[{en:"It's important to maintain a healthy lifestyle.",cn:"保持健康的生活方式很重要。"},{en:"She maintains good relationships with her colleagues.",cn:"她与同事保持良好的关系。"},{en:"The building needs regular maintenance.",cn:"这座建筑需要定期维护。"}]},
  {word:"major",phonetic:"/ˈmeɪdʒər/",pos:"adj.",meaning:"主要的；重大的",collocation:"major problem / major city",grammar:"反义词为 minor",examples:[{en:"Pollution is a major problem in big cities.",cn:"污染是大城市的一个主要问题。"},{en:"He made a major contribution to the project.",cn:"他对项目做出了重大贡献。"},{en:"This is a major decision.",cn:"这是一个重大决定。"}]},
  {word:"manage",phonetic:"/ˈmænɪdʒ/",pos:"v.",meaning:"管理；设法做到",collocation:"manage to do / manage time",grammar:"manage to do 设法做到",examples:[{en:"She managed to finish the work on time.",cn:"她设法按时完成了工作。"},{en:"He manages a team of ten people.",cn:"他管理一个十人的团队。"},{en:"You need to manage your time better.",cn:"你需要更好地管理你的时间。"}]},
  {word:"mature",phonetic:"/məˈtʃʊr/",pos:"adj.",meaning:"成熟的",collocation:"mature student / mature decision",grammar:"动词形式也为 mature",examples:[{en:"He is more mature than his classmates.",cn:"他比同学更成熟。"},{en:"She made a mature decision.",cn:"她做了一个成熟的决定。"},{en:"With age comes mature judgment.",cn:"年龄带来成熟的判断。"}]},
  {word:"negotiate",phonetic:"/nɪˈɡoʊʃieɪt/",pos:"v.",meaning:"谈判；协商",collocation:"negotiate with / negotiate a deal",grammar:"名词形式为 negotiation",examples:[{en:"They negotiated a peace agreement.",cn:"他们协商达成了和平协议。"},{en:"We need to negotiate with the supplier.",cn:"我们需要与供应商谈判。"},{en:"The negotiation took several days.",cn:"谈判持续了几天。"}]},
  {word:"numerous",phonetic:"/ˈnuːmərəs/",pos:"adj.",meaning:"许多的",collocation:"numerous times / numerous reasons",grammar:"比 many 更正式",examples:[{en:"There are numerous reasons to study English.",cn:"学习英语的理由有很多。"},{en:"He has visited the place numerous times.",cn:"他去过那个地方很多次。"},{en:"Numerous studies have shown this.",cn:"许多研究已经证明了这一点。"}]},
  {word:"obtain",phonetic:"/əbˈteɪn/",pos:"v.",meaning:"获得；得到",collocation:"obtain information / obtain permission",grammar:"比 get 更正式",examples:[{en:"She obtained a scholarship to study abroad.",cn:"她获得了出国留学的奖学金。"},{en:"It's difficult to obtain permission.",cn:"很难获得许可。"},{en:"Where can I obtain more information?",cn:"我在哪里可以获得更多信息？"}]},
  {word:"obvious",phonetic:"/ˈɑːbviəs/",pos:"adj.",meaning:"明显的",collocation:"it is obvious that / obvious reason",grammar:"副词形式为 obviously",examples:[{en:"It is obvious that he is lying.",cn:"很明显他在撒谎。"},{en:"The answer is obvious.",cn:"答案很明显。"},{en:"Obviously, we need more time.",cn:"显然，我们需要更多时间。"}]},
  {word:"occupy",phonetic:"/ˈɑːkjupaɪ/",pos:"v.",meaning:"占据；使忙碌",collocation:"be occupied with / occupy space",grammar:"be occupied with 忙于",examples:[{en:"She is occupied with her homework.",cn:"她正忙于做作业。"},{en:"The book occupies most of the shelf.",cn:"这本书占据了书架的大部分空间。"},{en:"His mind was occupied with worry.",cn:"他的脑子里充满了担忧。"}]},
  {word:"oppose",phonetic:"/əˈpoʊz/",pos:"v.",meaning:"反对",collocation:"oppose the plan / be opposed to",grammar:"be opposed to 反对",examples:[{en:"Many people opposed the new law.",cn:"许多人反对新法律。"},{en:"I am opposed to this idea.",cn:"我反对这个想法。"},{en:"The plan was opposed by many.",cn:"这个计划遭到了许多人的反对。"}]},
  {word:"original",phonetic:"/əˈrɪdʒənl/",pos:"adj.",meaning:"原始的；独创的",collocation:"original idea / original plan",grammar:"副词形式为 originally",examples:[{en:"That's a very original idea!",cn:"那是一个非常独创的想法！"},{en:"This is the original document.",cn:"这是原始文件。"},{en:"The original plan was different.",cn:"最初的计划是不同的。"}]},
  {word:"overcome",phonetic:"/ˌoʊvərˈkʌm/",pos:"v.",meaning:"克服",collocation:"overcome difficulties / overcome fear",grammar:"过去式为 overcame",examples:[{en:"She overcame her fear of public speaking.",cn:"她克服了对公开演讲的恐惧。"},{en:"We must overcome these difficulties.",cn:"我们必须克服这些困难。"},{en:"He overcame many obstacles to succeed.",cn:"他克服了许多障碍才获得成功。"}]},
  {word:"participate",phonetic:"/pɑːrˈtɪsɪpeɪt/",pos:"v.",meaning:"参加",collocation:"participate in / participate actively",grammar:"participate in 参加",examples:[{en:"All students should participate in class activities.",cn:"所有学生都应该参加课堂活动。"},{en:"She participated in the competition.",cn:"她参加了比赛。"},{en:"We encourage everyone to participate actively.",cn:"我们鼓励大家积极参与。"}]},
  {word:"perceive",phonetic:"/pərˈsiːv/",pos:"v.",meaning:"感知；认为",collocation:"perceive as / perceive that",grammar:"名词形式为 perception",examples:[{en:"She perceived a change in his attitude.",cn:"她察觉到他态度的变化。"},{en:"How do you perceive this situation?",cn:"你如何看待这种情况？"},{en:"Children perceive the world differently.",cn:"孩子们以不同的方式感知世界。"}]},
  {word:"permanent",phonetic:"/ˈpɜːrmənənt/",pos:"adj.",meaning:"永久的；固定的",collocation:"permanent job / permanent damage",grammar:"反义词为 temporary",examples:[{en:"Is this a permanent position?",cn:"这是一个永久职位吗？"},{en:"The damage may be permanent.",cn:"损害可能是永久的。"},{en:"Nothing is permanent in life.",cn:"生活中没有什么是永恒的。"}]},
  {word:"perspective",phonetic:"/pərˈspektɪv/",pos:"n.",meaning:"观点；视角",collocation:"from a perspective / new perspective",grammar:"from the perspective of 从...角度",examples:[{en:"Try to see things from a different perspective.",cn:"试着从不同的角度看问题。"},{en:"From my perspective, this is a good idea.",cn:"在我看来，这是一个好主意。"},{en:"A new perspective can help solve problems.",cn:"新的视角可以帮助解决问题。"}]},
  {word:"phenomenon",phonetic:"/fɪˈnɑːmɪnən/",pos:"n.",meaning:"现象",collocation:"natural phenomenon / social phenomenon",grammar:"复数形式为 phenomena",examples:[{en:"The northern lights are a natural phenomenon.",cn:"北极光是一种自然现象。"},{en:"This is a common social phenomenon.",cn:"这是一种常见的社会现象。"},{en:"Scientists study various phenomena.",cn:"科学家研究各种现象。"}]},
  {word:"potential",phonetic:"/pəˈtenʃl/",pos:"adj./n.",meaning:"潜在的；潜力",collocation:"have potential / potential danger",grammar:"可作形容词和名词",examples:[{en:"She has the potential to be a great leader.",cn:"她有成为伟大领导者的潜力。"},{en:"There are potential risks involved.",cn:"存在潜在的风险。"},{en:"We need to develop our full potential.",cn:"我们需要发挥我们的全部潜力。"}]},
  {word:"previous",phonetic:"/ˈpriːviəs/",pos:"adj.",meaning:"以前的；先前的",collocation:"previous experience / previous year",grammar:"副词形式为 previously",examples:[{en:"Do you have any previous experience?",cn:"你有以前的经验吗？"},{en:"This is better than the previous version.",cn:"这比以前的版本好。"},{en:"I previously worked in a different company.",cn:"我以前在不同的公司工作。"}]},
  {word:"principle",phonetic:"/ˈprɪnsəpl/",pos:"n.",meaning:"原则；原理",collocation:"basic principle / in principle",grammar:"注意与 principal 区分",examples:[{en:"Honesty is a basic principle of life.",cn:"诚实是生活的基本原则。"},{en:"In principle, I agree with you.",cn:"原则上，我同意你的看法。"},{en:"We should stick to our principles.",cn:"我们应该坚持我们的原则。"}]},
  {word:"priority",phonetic:"/praɪˈɔːrəti/",pos:"n.",meaning:"优先事项",collocation:"top priority / give priority to",grammar:"复数形式为 priorities",examples:[{en:"Education is a top priority for the government.",cn:"教育是政府的首要任务。"},{en:"We need to set our priorities.",cn:"我们需要确定优先事项。"},{en:"Safety should be given priority.",cn:"安全应该被优先考虑。"}]},
  {word:"proceed",phonetic:"/proʊˈsiːd/",pos:"v.",meaning:"继续；进行",collocation:"proceed to / proceed with",grammar:"proceed with 继续进行",examples:[{en:"Please proceed with your presentation.",cn:"请继续你的演示。"},{en:"We will proceed to the next step.",cn:"我们将进行下一步。"},{en:"The project is proceeding as planned.",cn:"项目正按计划进行。"}]},
  {word:"promote",phonetic:"/prəˈmoʊt/",pos:"v.",meaning:"促进；推广",collocation:"promote health / promote education",grammar:"名词形式为 promotion",examples:[{en:"Exercise promotes good health.",cn:"运动促进健康。"},{en:"The company is promoting its new product.",cn:"公司正在推广新产品。"},{en:"She was promoted to manager.",cn:"她被提升为经理。"}]},
  {word:"proportion",phonetic:"/prəˈpɔːrʃn/",pos:"n.",meaning:"比例；部分",collocation:"in proportion / a large proportion",grammar:"形容词形式为 proportional",examples:[{en:"A large proportion of students passed the exam.",cn:"很大比例的学生通过了考试。"},{en:"The proportion of women in the workforce is increasing.",cn:"女性在劳动力中的比例正在增加。"},{en:"Keep things in proportion.",cn:"保持事物的比例。"}]},
  {word:"pursue",phonetic:"/pərˈsuː/",pos:"v.",meaning:"追求；追赶",collocation:"pursue a career / pursue a goal",grammar:"名词形式为 pursuit",examples:[{en:"She is pursuing a career in medicine.",cn:"她正在追求医学事业。"},{en:"We should pursue our dreams.",cn:"我们应该追求我们的梦想。"},{en:"The police pursued the suspect.",cn:"警察追赶嫌疑人。"}]},
  {word:"react",phonetic:"/riˈækt/",pos:"v.",meaning:"反应",collocation:"react to / react by doing",grammar:"名词形式为 reaction",examples:[{en:"How did she react to the news?",cn:"她对新闻有什么反应？"},{en:"People react differently to stress.",cn:"人们对压力的反应不同。"},{en:"He reacted quickly to the situation.",cn:"他对情况反应迅速。"}]},
  {word:"recommend",phonetic:"/ˌrekəˈmend/",pos:"v.",meaning:"推荐；建议",collocation:"recommend doing / recommend that",grammar:"后接动名词或从句",examples:[{en:"I recommend reading this book.",cn:"我推荐读这本书。"},{en:"The doctor recommended that I rest.",cn:"医生建议我休息。"},{en:"Can you recommend a good restaurant?",cn:"你能推荐一家好餐厅吗？"}]},
  {word:"recover",phonetic:"/rɪˈkʌvər/",pos:"v.",meaning:"恢复；康复",collocation:"recover from / recover quickly",grammar:"名词形式为 recovery",examples:[{en:"She is recovering from a cold.",cn:"她正在从感冒中恢复。"},{en:"The economy is slowly recovering.",cn:"经济正在缓慢恢复。"},{en:"It took him months to recover.",cn:"他花了几个月才恢复。"}]},
  {word:"reflect",phonetic:"/rɪˈflekt/",pos:"v.",meaning:"反映；反思",collocation:"reflect on / reflect the reality",grammar:"reflect on 反思",examples:[{en:"The results reflect your hard work.",cn:"结果反映了你的努力。"},{en:"Take time to reflect on your mistakes.",cn:"花时间反思你的错误。"},{en:"The mirror reflects light.",cn:"镜子反射光线。"}]},
  {word:"reform",phonetic:"/rɪˈfɔːrm/",pos:"v./n.",meaning:"改革",collocation:"education reform / reform the system",grammar:"可作动词和名词",examples:[{en:"The government decided to reform the education system.",cn:"政府决定改革教育系统。"},{en:"Education reform is necessary.",cn:"教育改革是必要的。"},{en:"They are working to reform the system.",cn:"他们正在努力改革这个系统。"}]},
  {word:"rely",phonetic:"/rɪˈlaɪ/",pos:"v.",meaning:"依赖；依靠",collocation:"rely on / rely heavily on",grammar:"rely on 依赖",examples:[{en:"Don't rely too much on others.",cn:"不要太依赖别人。"},{en:"We rely on technology every day.",cn:"我们每天都依赖技术。"},{en:"You can rely on me.",cn:"你可以依靠我。"}]},
  {word:"relevant",phonetic:"/ˈreləvənt/",pos:"adj.",meaning:"相关的",collocation:"relevant to / relevant information",grammar:"反义词为 irrelevant",examples:[{en:"This information is relevant to the topic.",cn:"这个信息与主题相关。"},{en:"Please provide relevant details.",cn:"请提供相关细节。"},{en:"Is this question relevant?",cn:"这个问题相关吗？"}]},
  {word:"reluctant",phonetic:"/rɪˈlʌktənt/",pos:"adj.",meaning:"不情愿的",collocation:"be reluctant to / reluctant agreement",grammar:"副词形式为 reluctantly",examples:[{en:"He was reluctant to admit his mistake.",cn:"他不情愿承认错误。"},{en:"She gave a reluctant smile.",cn:"她勉强笑了笑。"},{en:"They were reluctant to help.",cn:"他们不情愿帮忙。"}]}
];