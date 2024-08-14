document.getElementById('spinner').addEventListener('click',function() {
    this.classList.toggle('spin');

    setTimeout(function(){
        console.log("delaying the reloadsdfgfhfgjhgjghfgdhgjhjdfhggjghhdfjghjkfgjjhgkghrjhyttu...")
        // location.reload();
        printShloka();
        document.getElementById('spinContainer').style.display = 'none';
        
    },3000);
    
})

const shlokas = [
    {
        "sanskrit": "ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ।",
        "hindi_translation": "हे भगवान! हमें असत्य से सत्य की ओर, अंधकार से प्रकाश की ओर, और मृत्यु से अमरता की ओर ले चलो।",
        "english_translation": "O Lord! Lead us from untruth to truth, from darkness to light, and from death to immortality.",
        "source": "Brihadaranyaka Upanishad"
    },
    {
        "sanskrit": "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
        "hindi_translation": "श्रीमद्भगवद्गीता में भगवान श्रीकृष्ण अर्जुन से कहते हैं: तुम्हारा अधिकार केवल कर्म करना ही है| कर्मों के फल पर तुम्हारा अधिकार नहीं है| अतः तुम निरन्तर कर्म के फल पर मनन मत करो और अकर्मण्य भी मत बनो|",
        "english_translation": "In the Bhagavad Gita, Lord Krishna tells Arjuna – You only have a right to action (karma) and not to the fruits of your karma. Do not become a person who constantly meditates upon (gets attached to) the results of one’s karma. Do not get attached to inactivity (no karma).",
        "source": "Bhagavad Gita, Chapter 2, Verse 47"
    },
    {
        "sanskrit": "ॐ सह नाववतु। सह नौ भुनक्तु। सह वीर्यं करवावहै। तेजस्विनावधीतमस्तु मा विद्विषावहै॥",
        "hindi_translation": "हम दोनों की रक्षा करें, हम दोनों को भोजन दें, हम दोनों को सामर्थ्य प्रदान करें। हमारी विद्या तेजस्वी हो, हम एक-दूसरे से द्वेष न करें।",
        "english_translation": "May He protect us both; may He nourish us both; may we both work together with great energy. May our study be enlightening and may we not hate each other.",
        "source": "Taittiriya Upanishad"
    },
    {
        "sanskrit": "वसुधैव कुटुम्बकम्।",
        "hindi_translation": "पूरा विश्व एक परिवार है।",
        "english_translation": "The whole world is one family.",
        "source": "Maha Upanishad"
    },
    {
        "sanskrit": "यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवता:। यत्रैतास्तु न पूज्यन्ते सर्वास्तत्राफला: क्रिया:॥",
        "hindi_translation": "जहाँ स्त्रियों का सम्मान होता है, वहाँ देवता प्रसन्न रहते हैं; और जहाँ उनका अपमान होता है, वहाँ सभी काम निष्फल हो जाते हैं।",
        "english_translation": "Where women are honored, there the gods are pleased; but where they are not honored, no sacred rite yields rewards.",
        "source": "Manusmriti, Chapter 3, Verse 56"
    },
    {
        "sanskrit": "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥",
        "hindi_translation": "सभी सुखी हों, सभी रोगमुक्त हों, सभी शुभ चीज़ों को देखें, कोई भी दुःखी न हो।",
        "english_translation": "May all be happy, may all be free from disease, may all experience auspiciousness, and may no one suffer in sorrow.",
        "source": "Brihadaranyaka Upanishad"
    },
    {
        "sanskrit": "श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः। ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति॥",
        "hindi_translation": "श्रद्धावान, संयमित इन्द्रियों वाला और ज्ञान के लिए तत्पर पुरुष ज्ञान प्राप्त करता है। ज्ञान प्राप्त करने के बाद, वह शीघ्र ही परम शांति को प्राप्त करता है।",
        "english_translation": "A person who is full of faith, who is dedicated to gaining knowledge, and who has control over the senses, obtains knowledge. Having gained knowledge, he soon attains supreme peace.",
        "source": "Bhagavad Gita, Chapter 4, Verse 39"
    },
    {
        "sanskrit": "मात्रदेवो भव। पितृदेवो भव। आचार्यदेवो भव। अतिथिदेवो भव॥",
        "hindi_translation": "माँ को देवता के रूप में मानो। पिता को देवता के रूप में मानो। गुरु को देवता के रूप में मानो। अतिथि को देवता के रूप में मानो।",
        "english_translation": "Treat your mother as a goddess, treat your father as a god, treat your teacher as a god, treat your guest as a god.",
        "source": "Taittiriya Upanishad"
    },
    {
        "sanskrit": "अहम् ब्रह्मास्मि।",
        "hindi_translation": "मैं ब्रह्म हूँ।",
        "english_translation": "I am Brahman.",
        "source": "Brihadaranyaka Upanishad"
    },
    {
        "sanskrit": "एकं सत् विप्राः बहुधा वदन्ति।",
        "hindi_translation": "सत्य एक है, ज्ञानी इसे विभिन्न नामों से पुकारते हैं।",
        "english_translation": "Truth is one, but the wise call it by many names.",
        "source": "Rigveda"
    },
    {
        "sanskrit": "मयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव।",
        "hindi_translation": "जैसे मणियों का समूह धागे में पिरोया हुआ होता है, वैसे ही यह सम्पूर्ण सृष्टि मुझमें पिरोयी हुई है।",
        "english_translation": "Like beads strung on a thread, all of creation is strung on me.",
        "source": "Bhagavad Gita, Chapter 7, Verse 7"
    },
    {
        "sanskrit": "न त्वहं कामये राज्यं न स्वर्गं न पुनर्भवम्। कामये दुःखतप्तानां प्राणिनामार्तिनाशनम्॥",
        "hindi_translation": "मैं राज्य, स्वर्ग या पुनर्जन्म की इच्छा नहीं करता। मेरी इच्छा है कि दुख से तप्त प्राणियों की पीड़ा दूर हो।",
        "english_translation": "I do not desire kingdom, heaven, or rebirth. My desire is to alleviate the suffering of beings afflicted by sorrow.",
        "source": "Vivekachudamani"
    },
    {
        "sanskrit": "विद्या ददाति विनयं विनयाद्याति पात्रताम्। पात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम्॥",
        "hindi_translation": "विद्या विनम्रता देती है, विनम्रता से पात्रता आती है। पात्रता से धन मिलता है, धन से धर्म और फिर सुख की प्राप्ति होती है।",
        "english_translation": "Knowledge gives humility, from humility comes worthiness, from worthiness one gets wealth, from wealth comes righteousness, and from righteousness, happiness.",
        "source": "Hitopadesha"
    },
    {
        "sanskrit": "क्षमा वीरस्य भूषणम्।",
        "hindi_translation": "क्षमा वीर का आभूषण है।",
        "english_translation": "Forgiveness is the ornament of the brave.",
        "source": "Mahabharata"
    },
    {
        "sanskrit": "नास्ति विद्या समानं चक्षुः।",
        "hindi_translation": "विद्या के समान कोई आँख नहीं है।",
        "english_translation": "There is no eye like knowledge.",
        "source": "Chandogya Upanishad"
    },
    {
        "sanskrit": "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च। निर्ममो निरहङ्कारः समदुःखसुखः क्षमी॥",
        "hindi_translation": "जो सभी प्राणियों का द्वेष न करने वाला, मित्रवत्, करुणामय, निरपेक्ष, अहंकार रहित, सुख-दुःख में समभाव वाला और क्षमाशील है।",
        "english_translation": "He who is non-envious towards all beings, friendly, compassionate, free from possessiveness and ego, and balanced in joy and sorrow is forgiving.",
        "source": "Bhagavad Gita, Chapter 12, Verse 13"
    },
    {
        "sanskrit": "सा विद्या या विमुक्तये।",
        "hindi_translation": "वह विद्या है जो मुक्ति दिलाती है।",
        "english_translation": "True knowledge is that which liberates.",
        "source": "Vishnu Purana"
    },
    {
        "sanskrit": "न सा सभा यत्र न सन्ति वृद्धाः।",
        "hindi_translation": "वह सभा सभा नहीं है जहाँ वृद्ध (ज्ञानी) नहीं हैं।",
        "english_translation": "That is not an assembly where there are no elders (wise people).",
        "source": "Mahabharata"
    },
    {
        "sanskrit": "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।",
        "hindi_translation": "इस संसार में ज्ञान के समान पवित्र और कुछ भी नहीं है।",
        "english_translation": "There is nothing in this world as purifying as knowledge.",
        "source": "Bhagavad Gita, Chapter 4, Verse 38"
    },
    {
        "sanskrit": "सर्वं खल्विदं ब्रह्म।",
        "hindi_translation": "यह सम्पूर्ण ब्रह्माण्ड ब्रह्म है।",
        "english_translation": "All this is indeed Brahman.",
        "source": "Chandogya Upanishad"
    },
    {
        "sanskrit": "शरीरमाद्यं खलु धर्मसाधनम्।",
        "hindi_translation": "शरीर ही धर्म का साधन है।",
        "english_translation": "The body is indeed the primary instrument of righteousness.",
        "source": "Mahabharata"
    },
    {
        "sanskrit": "अहमात्मा गुडाकेश सर्वभूताशयस्थितः।",
        "hindi_translation": "हे अर्जुन! मैं आत्मा हूँ, जो सभी प्राणियों के हृदय में स्थित है।",
        "english_translation": "O Arjuna! I am the Self, seated in the hearts of all beings.",
        "source": "Bhagavad Gita, Chapter 10, Verse 20"
    },
    {
        "sanskrit": "धर्मो रक्षति रक्षितः।",
        "hindi_translation": "जो धर्म की रक्षा करता है, उसकी धर्म भी रक्षा करता है।",
        "english_translation": "Dharma protects those who protect it.",
        "source": "Manusmriti"
    },
    {
        "sanskrit": "अहिंसा परमो धर्मः।",
        "hindi_translation": "अहिंसा परम धर्म है।",
        "english_translation": "Non-violence is the supreme duty.",
        "source": "Mahabharata"
    },
    {
        "sanskrit": "मनो एव मनुष्याणां कारणं बन्धमोक्षयोः।",
        "hindi_translation": "मनुष्य के बंधन और मोक्ष का कारण केवल मन ही है।",
        "english_translation": "The mind alone is the cause of bondage and liberation for human beings.",
        "source": "Amritabindu Upanishad"
    },
    {
        "sanskrit": "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।",
        "hindi_translation": "हे अर्जुन! योग में स्थित होकर, आसक्ति को त्यागकर कर्म करो।",
        "english_translation": "O Arjuna! Perform your duties, being steadfast in yoga and abandoning attachment.",
        "source": "Bhagavad Gita, Chapter 2, Verse 48"
    },
    {
        "sanskrit": "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।",
        "hindi_translation": "मनुष्य को अपने द्वारा ही अपने को ऊपर उठाना चाहिए और अपने को नीचा नहीं करना चाहिए।",
        "english_translation": "A man must elevate himself by his own mind and not degrade himself.",
        "source": "Bhagavad Gita, Chapter 6, Verse 5"
    },
    {
        "sanskrit": "त्वमेव माता च पिता त्वमेव।",
        "hindi_translation": "तुम ही मेरी माता हो और तुम ही मेरे पिता हो।",
        "english_translation": "You are my mother and you are my father.",
        "source": "Shiva Mahimna Stotra"
    },
    {
        "sanskrit": "स्वधर्मे निधनं श्रेयः परधर्मो भयावहः।",
        "hindi_translation": "अपने धर्म में मरना भी कल्याणकारी है, जबकि दूसरे के धर्म में भय होता है।",
        "english_translation": "It is better to die in one's own duty; the duty of another is fraught with fear.",
        "source": "Bhagavad Gita, Chapter 3, Verse 35"
    },
    {
        "sanskrit": "संयमात् योगि नाद्विजते।",
        "hindi_translation": "संयम से योगी को भय नहीं होता।",
        "english_translation": "The yogi is not disturbed by self-control.",
        "source": "Bhagavad Gita"
    },
    {
        "sanskrit": "विवेकः सर्वोत्तमः।",
        "hindi_translation": "विवेक सबसे श्रेष्ठ है।",
        "english_translation": "Discretion is the highest virtue.",
        "source": "Vivekachudamani"
    },
    {
        "sanskrit": "न चोरहार्यं न च राजहार्यं।",
        "hindi_translation": "यह विद्या न चोरों द्वारा चुराई जा सकती है, न राजा द्वारा छीनी जा सकती है।",
        "english_translation": "Knowledge cannot be stolen by thieves, nor can it be taken away by kings.",
        "source": "Hitopadesha"
    },
    {
        "sanskrit": "अवश्यं भाविनो भावाः।",
        "hindi_translation": "जो होना है, वह निश्चित रूप से होगा।",
        "english_translation": "What is destined to happen, will certainly happen.",
        "source": "Mahabharata"
    },
    {
        "sanskrit": "यो वै भूमा तत्सुखम्।",
        "hindi_translation": "जो विशाल (ब्रह्म) है, वही सुख है।",
        "english_translation": "That which is vast (Brahman) is happiness.",
        "source": "Chandogya Upanishad"
    },
    {
        "sanskrit": "शिवोऽहं शिवोऽहं।",
        "hindi_translation": "मैं शिव हूँ, मैं शिव हूँ।",
        "english_translation": "I am Shiva, I am Shiva.",
        "source": "Shiva Mantra"
    },
    {
        "sanskrit": "मूर्खस्य पञ्च चिन्हानि गर्वो दुर्वचनं तथा।",
        "hindi_translation": "मूर्ख के पाँच लक्षण होते हैं – गर्व, कठोर वाणी, क्रोध, ईर्ष्या और आलस।",
        "english_translation": "A fool has five signs: pride, harsh speech, anger, jealousy, and laziness.",
        "source": "Chanakya Neeti"
    },
    {
        "sanskrit": "यो यच्छ्रद्धः स एव सः।",
        "hindi_translation": "जिस प्रकार की श्रद्धा होती है, मनुष्य वैसा ही होता है।",
        "english_translation": "A person is as his faith is.",
        "source": "Bhagavad Gita, Chapter 17, Verse 3"
    },
    {
        "sanskrit": "सर्वं ज्ञानप्लवेनैव वृजिनं संतरिष्यसि।",
        "hindi_translation": "ज्ञानरूपी नौका से सभी पापों को पार कर जाओगे।",
        "english_translation": "By the boat of knowledge, you will cross over all sins.",
        "source": "Bhagavad Gita, Chapter 4, Verse 36"
    },
    {
        "sanskrit": "विवेकानन्दं परमानन्दं।",
        "hindi_translation": "विवेक से परमानंद प्राप्त होता है।",
        "english_translation": "Supreme bliss is attained through discrimination.",
        "source": "Vivekachudamani"
    },
    {
        "sanskrit": "नास्ति सत्यसमं तपः।",
        "hindi_translation": "सत्य के समान कोई तप नहीं है।",
        "english_translation": "There is no penance like truth.",
        "source": "Mahabharata"
    },
    {
        "sanskrit": "धर्म एव हतो हन्ति धर्मो रक्षति रक्षितः। तस्माद्धर्मो न हन्तव्यो मा नो धर्मो हतोऽवधीत्॥",
        "hindi_translation": "धर्म का पालन करने वाला कभी नष्ट नहीं होता और जो धर्म की रक्षा करता है, धर्म उसकी रक्षा करता है। इसलिए धर्म का कभी हनन न करें, ताकि धर्म आपको हानि न पहुँचाए।",
        "english_translation": "Righteousness (Dharma) destroys those who destroy it. Righteousness protects those who protect it. Therefore, do not destroy righteousness, so that it may not destroy you.",
        "source": "Mahabharata, Vana Parva, 313.117"
    },
    {
        "sanskrit": "विद्या विवादाय धनं मदाय शक्तिः परेषां परिपीडनाय। खलस्य साधोर्विपरीतमेतज्ज्ञानाय दानाय च रक्षणाय॥",
        "hindi_translation": "दुष्ट व्यक्ति विद्या का उपयोग विवाद के लिए, धन का उपयोग अहंकार के लिए, और शक्ति का उपयोग दूसरों को पीड़ा देने के लिए करता है। सज्जन व्यक्ति इनका उपयोग ज्ञान, दान, और रक्षा के लिए करता है।",
        "english_translation": "The wicked use knowledge for argument, wealth for pride, and power for hurting others. The righteous use them for knowledge, charity, and protection.",
        "source": "Mahabharata, Shanti Parva, 141.33"
    },
    {
        "sanskrit": "नह्यन्यः पन्था भवति विद्यातो न विद्या चाशुचितं शुध्यति॥",
        "hindi_translation": "विद्या के बिना कोई और मार्ग नहीं है, और अशुद्धता को केवल विद्या ही दूर कर सकती है।",
        "english_translation": "There is no other path without knowledge, and only knowledge can remove impurity.",
        "source": "Mahabharata, Udyoga Parva, 34.76"
    },
    {
        "sanskrit": "नास्ति सत्यात् परो धर्मः।",
        "hindi_translation": "सत्य से बढ़कर कोई धर्म नहीं है।",
        "english_translation": "There is no Dharma (righteousness) higher than truth.",
        "source": "Mahabharata, Anushasana Parva, 91.14"
    },
    {
        "sanskrit": "सत्यं हि परमं धर्मं सत्यं हि परमं तपः। सत्यं हि परमं यज्ञं सत्ये सर्वं प्रतिष्ठितम्॥",
        "hindi_translation": "सत्य ही परम धर्म है, सत्य ही परम तप है, सत्य ही परम यज्ञ है, सत्य में सब कुछ प्रतिष्ठित है।",
        "english_translation": "Truth is the highest Dharma, truth is the highest penance, truth is the highest sacrifice, and everything is established in truth.",
        "source": "Mahabharata, Shanti Parva, 162.23"
    },
    {
        "sanskrit": "अनृतं साहसं माया मूर्खत्वमतिलोभिता। अशौचत्वं निरात्मत्वं कामक्रोधाश्च षड्वृयः॥",
        "hindi_translation": "झूठ, दुस्साहस, माया, मूर्खता, अत्यधिक लोभ, अशुद्धता, आत्महीनता, काम और क्रोध - ये छह दुर्गुण हैं।",
        "english_translation": "Falsehood, audacity, deceit, foolishness, excessive greed, impurity, lack of self-respect, lust, and anger are six vices.",
        "source": "Mahabharata, Udyoga Parva, 33.7"
    },
    {
        "sanskrit": "आत्मार्थं जीव लोकेऽस्मिन्कः कश्चित् किल नान्यथा।",
        "hindi_translation": "इस संसार में हर कोई केवल अपने ही लिए जीता है, कोई भी दूसरों के लिए नहीं जीता।",
        "english_translation": "In this world, everyone lives only for themselves; no one lives for others.",
        "source": "Mahabharata, Udyoga Parva, 37.1"
    },
    {
        "sanskrit": "न त्वं कामयसे यस्त्वं यस्यैतदस्य भागशः।",
        "hindi_translation": "तुम उस व्यक्ति की तरह नहीं हो जो केवल अपने हिस्से के लिए लालायित रहता है।",
        "english_translation": "You are not like those who crave only for their share.",
        "source": "Mahabharata, Shanti Parva, 162.20"
    },
    {
        "sanskrit": "अधर्मो हि समुत्पन्नः भवत्येवास्य हेतुकः।",
        "hindi_translation": "अधर्म उत्पन्न होता है और इसके कारण ही अन्याय बढ़ता है।",
        "english_translation": "Adharma (unrighteousness) arises and it is the cause of injustice.",
        "source": "Mahabharata, Anushasana Parva, 118.8"
    },
    {
        "sanskrit": "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
        "hindi_translation": "तुम्हारा अधिकार केवल कर्म करने में है, उसके फल में कभी नहीं।",
        "english_translation": "Your right is only to perform your duties, never to the fruits of those actions.",
        "source": "Mahabharata, Bhishma Parva, 43.2 (Bhagavad Gita, 2.47)"
    },
    {
        "sanskrit": "नित्यं प्रयत्नमातिष्ठो नित्यं साधय कर्मणि।,अर्जुनस्य यथा यस्मिन् कर्मण्येव सदा रतिः॥",
        "hindi_translation": "सदा प्रयत्नशील रहो और निरंतर कर्मों को साधो। अर्जुन के समान कर्म में सदा रत रहो।",
        "english_translation": "Always be diligent and consistently perform your duties. Be as dedicated to action as Arjuna was.",
        "source": "Mahabharata, Shalya Parva, Chapter 15, Verse 25"
    },
    {
        "sanskrit": "उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत।क्षुरस्य धारा निशिता दुरत्यया।दुर्गं पथस्तत्कवयो वदन्ति॥",    
     
        "hindi_translation": "उठो, जागो और श्रेष्ठता प्राप्त करने के लिए प्रयास करो। यह मार्ग तलवार की धार के समान कठिन है, जिसे महान ज्ञानी लोग भी कठिन बताते हैं।",
        "english_translation": "Arise, awake, and stop not until the goal is reached. This path is as sharp as a razor's edge, difficult to tread, so say the wise.",
        "source": "Katha Upanishad, 1.3.14 (though not strictly a Vedic text, it's closely connected)"
    },
    {
        "sanskrit": "यस्ते स्तेनहिनस्ते सन्यस्ते करिणस्ते।संधत्ते दीधितिं धीरो ज्योतिषा जयोतिर्विद्युतः॥",  
                   
        "hindi_translation": "जो व्यक्ति दृढ़ता से प्रयास करता है, वह ज्ञान के प्रकाश को प्राप्त करता है। उसकी धीरता उसे प्रकाश और विद्युत के समान चमकदार बना देती है।",
        "english_translation": "He who exerts himself with firm determination attains the light of knowledge. His perseverance makes him shine like light and lightning.",
        "source": "Rigveda, 1.92.5"
    },
    {
        "sanskrit": "तं त्वा जगतां पते त्रातारं त्रातारं सुमखस्य धेहि।दुर्मन्त्रं दुर्भिषजं भद्रमस्मद् दुःस्वप्नः सुदिनं देहि॥",  
                   
        "hindi_translation": "हे जगतों के स्वामी! हमें बचाने वाले, हमारे रक्षक, हमें ज्ञान दो और हमें बुरी सलाहों और बुरी स्वास्थ्य से बचाओ।",
        "english_translation": "O Lord of the worlds! Protect us, our guardian, grant us knowledge and save us from bad counsel and ill health.",
        "source": "Yajurveda, 19.9"
    },
    {
        "sanskrit": "शृण्वन्तु विश्वे अमृतस्य पुत्रा आ ये धामानि दिव्यानि तस्थुः।वेदाहमेतं पुरुषं महान्तमादित्यवर्णं तमसः परस्तात्॥",  
                   
        "hindi_translation": "हे अमृत के पुत्रों! सुनो, जो दिव्य लोकों में स्थित हैं। मैंने उस महान पुरुष को देखा है, जो सूर्य के समान चमकता है और अंधकार के परे है।",
        "english_translation": "Listen, O children of immortality, who dwell in the divine realms. I have seen that great person, radiant like the sun, who is beyond darkness.",
        "source": "Shvetashvatara Upanishad, 2.15 (an Upanishadic text closely associated with Vedic teachings)"
    },
    {
        "sanskrit": "ऋते ज्ञानान्न मुक्तिः स्यात् न च मुक्तिर्न ज्ञानतः।न च मूढस्य मूढत्वादसाधनपरिग्रहः॥",
                   
        "hindi_translation": "ज्ञान के बिना मुक्ति संभव नहीं है, और मुक्ति के बिना ज्ञान नहीं। मूर्ख व्यक्ति अपने अज्ञानता के कारण सही साधनों का चयन नहीं करता।",
        "english_translation": "Liberation is not possible without knowledge, nor knowledge without liberation. A foolish person, due to ignorance, does not choose the right means.",
        "source": "Rigveda, 1.164.20"
    },
    {
        "sanskrit": "आ नो भद्राः क्रतवो यन्तु विश्वतः।अदब्धासो अपरितासो अरिष्टाः॥",
                   
        "hindi_translation": "हमारे पास चारों दिशाओं से शुभ विचार आएं, अचूक और अडिग, जो हमें अनिष्ट से बचाएं।",
        "english_translation": "Let noble thoughts come to us from all sides, unfailing and steadfast, protecting us from harm.",
        "source": "Rigveda, 1.89.1"
    },
    {
        "sanskrit": "नवगु तिष्ठन्तं तृतीयं त्रीणि चरणान्यचलानि।  स तान्युदेवयन्भुवि पात्यान्येवमिष्यते॥",  
                 
        "hindi_translation": "दृढ़ता के साथ तीन कदम उठाना, जो अचल हैं। जो व्यक्ति ऐसा करता है, वह इस धरती पर विजय प्राप्त करता है।",
        "english_translation": "With steadfastness, taking three unwavering steps. The one who does so attains victory on this earth.",
        "source": "Atharvaveda, 12.1.38"
    }
]
       
function printShloka(){
    // for(let i = 0;i < shlokas.length; i)
    const randomShloka = shlokas[Math.floor(Math.random()*shlokas.length)];
    // console.log(randomShloka); 
    console.log(randomShloka.sanskrit)
    console.log(randomShloka.hindi_translation)
    console.log(randomShloka.english_translation)
    console.log(Math.floor(Math.random()*shlokas.length))
    console.log(shlokas.length)

    const shlokaContainer = document.querySelector('.shlokaContainer');

    // clear any content previously available
    shlokaContainer.innerHTML = "";

    const childDiv1 = document.createElement('span');
    const childDiv2 = document.createElement('span');
    const childDiv3 = document.createElement('span');
    const childDiv4 = document.createElement('span');
    const spinButton = document.createElement('button');

    childDiv1.innerText = randomShloka.sanskrit;
    childDiv2.innerText = randomShloka.hindi_translation;
    childDiv3.innerText = randomShloka.english_translation;
    childDiv4.innerText = randomShloka.source;
    spinButton.innerText = 'spin the wheel';

    childDiv1.classList.add('sanskritShloka');
    childDiv2.classList.add('hindiTranslation');
    childDiv3.classList.add('englishTranslation');
    childDiv4.classList.add('source');
    spinButton.classList.add('spinTheWheelButton');

    shlokaContainer.appendChild(childDiv1);
    shlokaContainer.appendChild(childDiv2);
    shlokaContainer.appendChild(childDiv3);
    shlokaContainer.appendChild(childDiv4);
    shlokaContainer.appendChild(spinButton);

    spinButton.addEventListener('click',() => {
        location.reload();
    })

}

// printShloka();
