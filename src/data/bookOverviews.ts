import type { BookOverview } from "@/types/biblebooks";

export const bookOverviews: Record<string, BookOverview> = {
  genesis: {
    slug: "genesis",
    author: "Moses",
    dateWritten: "~1446–1406 BC",
    summary:
      "Genesis tells the story of creation, the fall of humanity, and God's covenant relationship with the patriarchs Abraham, Isaac, Jacob, and Joseph. It lays the foundation for the entire biblical narrative by establishing God as Creator and the origin of His redemptive plan.",
    themes: ["Creation", "Fall and Sin", "Covenant", "Faith", "Providence"],
  },
  exodus: {
    slug: "exodus",
    author: "Moses",
    dateWritten: "~1446–1406 BC",
    summary:
      "Exodus chronicles Israel's deliverance from slavery in Egypt, the giving of the Law at Mount Sinai, and the construction of the tabernacle. It reveals God as a mighty deliverer who forms a covenant nation for Himself.",
    themes: ["Deliverance", "Covenant Law", "God's Presence", "Worship", "Redemption"],
  },
  leviticus: {
    slug: "leviticus",
    author: "Moses",
    dateWritten: "~1446–1406 BC",
    summary:
      "Leviticus provides detailed instructions for worship, sacrifices, and holy living for the people of Israel. It emphasizes that God is holy and calls His people to reflect that holiness in every area of life.",
    themes: ["Holiness", "Sacrifice", "Atonement", "Purity", "Worship"],
  },
  numbers: {
    slug: "numbers",
    author: "Moses",
    dateWritten: "~1446–1406 BC",
    summary:
      "Numbers records Israel's wilderness wanderings after leaving Sinai, including two censuses of the people, acts of rebellion, and God's continued faithfulness. It demonstrates the consequences of unbelief and the patience of God.",
    themes: ["Faithfulness", "Rebellion", "Wandering", "God's Patience", "Obedience"],
  },
  deuteronomy: {
    slug: "deuteronomy",
    author: "Moses",
    dateWritten: "~1406 BC",
    summary:
      "Deuteronomy contains Moses' farewell addresses to Israel on the plains of Moab before they enter the Promised Land. It restates the Law and calls the people to love and obey God wholeheartedly.",
    themes: ["Covenant Renewal", "Obedience", "Love for God", "Remembrance", "Blessing and Curse"],
  },
  joshua: {
    slug: "joshua",
    author: "Joshua",
    dateWritten: "~1400–1370 BC",
    summary:
      "Joshua records the conquest and division of the Promised Land under Joshua's leadership. It shows God's faithfulness in fulfilling His promises to Abraham and the importance of courageous obedience.",
    themes: ["Conquest", "Faithfulness", "Courage", "Promised Land", "Leadership"],
  },
  judges: {
    slug: "judges",
    author: "Traditionally Samuel",
    dateWritten: "~1050–1000 BC",
    summary:
      "Judges describes a turbulent period in Israel's history marked by cycles of sin, oppression, repentance, and deliverance through God-appointed leaders. It illustrates the consequences of doing what is right in one's own eyes.",
    themes: ["Cycle of Sin", "Deliverance", "Leadership", "Apostasy", "God's Mercy"],
  },
  ruth: {
    slug: "ruth",
    author: "Traditionally Samuel",
    dateWritten: "~1050–1000 BC",
    summary:
      "Ruth tells the story of a Moabite woman whose loyalty to her mother-in-law Naomi leads her into the family line of King David and ultimately the Messiah. It is a story of faithfulness, redemption, and God's providence.",
    themes: ["Loyalty", "Redemption", "Providence", "Kindness", "Family"],
  },
  "1-samuel": {
    slug: "1-samuel",
    author: "Samuel, Nathan, and Gad",
    dateWritten: "~1050–900 BC",
    summary:
      "1 Samuel covers Israel's transition from the period of judges to the monarchy, featuring the lives of Samuel, Saul, and the rise of David. It explores themes of leadership, obedience, and God's sovereign choice.",
    themes: ["Kingship", "Obedience", "God's Sovereignty", "Leadership", "Anointing"],
  },
  "2-samuel": {
    slug: "2-samuel",
    author: "Nathan and Gad",
    dateWritten: "~1000–900 BC",
    summary:
      "2 Samuel focuses on David's reign as king over Israel, including his triumphs, his sin with Bathsheba, and the resulting consequences. It reveals both the blessings of faithfulness and the heavy cost of sin.",
    themes: ["Davidic Covenant", "Sin and Consequences", "Grace", "Leadership", "Repentance"],
  },
  "1-kings": {
    slug: "1-kings",
    author: "Traditionally Jeremiah",
    dateWritten: "~560–540 BC",
    summary:
      "1 Kings covers Solomon's glorious reign, the building of the temple, and the tragic division of the kingdom into Israel and Judah. It traces the spiritual decline that comes from turning away from God.",
    themes: ["Wisdom", "Temple", "Divided Kingdom", "Idolatry", "Prophecy"],
  },
  "2-kings": {
    slug: "2-kings",
    author: "Traditionally Jeremiah",
    dateWritten: "~560–540 BC",
    summary:
      "2 Kings continues the history of the divided kingdoms through their respective falls — Israel to Assyria and Judah to Babylon. It highlights the prophetic warnings ignored and the judgment that followed.",
    themes: ["Judgment", "Exile", "Prophetic Warning", "Apostasy", "God's Justice"],
  },
  "1-chronicles": {
    slug: "1-chronicles",
    author: "Ezra",
    dateWritten: "~450–425 BC",
    summary:
      "1 Chronicles retells Israel's history from Adam through David's reign, emphasizing the temple, worship, and the Davidic dynasty. Written for the post-exile community, it reminds them of their spiritual heritage.",
    themes: ["Worship", "Davidic Dynasty", "Temple", "Genealogy", "Faithfulness"],
  },
  "2-chronicles": {
    slug: "2-chronicles",
    author: "Ezra",
    dateWritten: "~450–425 BC",
    summary:
      "2 Chronicles covers the history of Judah from Solomon through the exile, focusing on the kings' relationship with the temple and worship. It emphasizes that faithfulness to God brings blessing while unfaithfulness brings judgment.",
    themes: ["Temple Worship", "Reform", "Faithfulness", "Judgment", "Restoration"],
  },
  ezra: {
    slug: "ezra",
    author: "Ezra",
    dateWritten: "~450–420 BC",
    summary:
      "Ezra records the return of Jewish exiles from Babylon and the rebuilding of the temple in Jerusalem. It highlights the importance of restoring proper worship and obedience to God's Word.",
    themes: ["Return from Exile", "Temple Rebuilding", "Reform", "God's Word", "Repentance"],
  },
  nehemiah: {
    slug: "nehemiah",
    author: "Nehemiah",
    dateWritten: "~430–420 BC",
    summary:
      "Nehemiah tells the story of rebuilding Jerusalem's walls under Nehemiah's leadership despite opposition. It demonstrates bold leadership, prayer, and the renewal of the covenant community.",
    themes: ["Rebuilding", "Leadership", "Prayer", "Covenant Renewal", "Perseverance"],
  },
  esther: {
    slug: "esther",
    author: "Unknown",
    dateWritten: "~470–424 BC",
    summary:
      "Esther tells the dramatic story of a Jewish queen who risks her life to save her people from genocide in the Persian Empire. Though God's name is never mentioned, His providence is evident throughout.",
    themes: ["Providence", "Courage", "Deliverance", "Identity", "Reversal"],
  },
  job: {
    slug: "job",
    author: "Unknown",
    dateWritten: "Unknown (possibly patriarchal era)",
    summary:
      "Job wrestles with the problem of innocent suffering through the story of a righteous man who loses everything. Through dialogue with friends and a direct encounter with God, it explores the mystery of God's sovereignty.",
    themes: ["Suffering", "Sovereignty of God", "Faith", "Wisdom", "Restoration"],
  },
  psalms: {
    slug: "psalms",
    author: "David, Asaph, Sons of Korah, and others",
    dateWritten: "~1440–430 BC",
    summary:
      "Psalms is a collection of 150 songs and prayers that express the full range of human emotion before God — from praise and thanksgiving to lament and repentance. It has served as the worship hymnal of God's people for millennia.",
    themes: ["Worship", "Prayer", "Praise", "Lament", "Trust in God"],
  },
  proverbs: {
    slug: "proverbs",
    author: "Solomon, Agur, and Lemuel",
    dateWritten: "~970–700 BC",
    summary:
      "Proverbs is a collection of wise sayings that offer practical guidance for daily living. Rooted in the fear of the Lord, it covers topics like relationships, work, speech, and character.",
    themes: ["Wisdom", "Fear of the Lord", "Righteous Living", "Discipline", "Speech"],
  },
  ecclesiastes: {
    slug: "ecclesiastes",
    author: "Solomon",
    dateWritten: "~940–930 BC",
    summary:
      "Ecclesiastes is a philosophical reflection on the meaning of life, concluding that all pursuits apart from God are ultimately meaningless. It challenges readers to find purpose in fearing God and keeping His commandments.",
    themes: ["Meaning of Life", "Vanity", "Wisdom", "Fear of God", "Enjoyment"],
  },
  "song-of-solomon": {
    slug: "song-of-solomon",
    author: "Solomon",
    dateWritten: "~970–930 BC",
    summary:
      "Song of Solomon is a poetic celebration of romantic love between a bride and bridegroom. It affirms the beauty and goodness of love within the covenant relationship and has been read as an allegory of God's love for His people.",
    themes: ["Romantic Love", "Beauty", "Devotion", "Covenant", "Desire"],
  },
  isaiah: {
    slug: "isaiah",
    author: "Isaiah",
    dateWritten: "~740–680 BC",
    summary:
      "Isaiah is a sweeping prophetic work that warns of judgment for sin while offering profound hope in a coming Messiah and a future restoration. Its vivid descriptions of the Suffering Servant are among the most quoted messianic prophecies.",
    themes: ["Messianic Hope", "Judgment", "Holiness", "Comfort", "Salvation"],
  },
  jeremiah: {
    slug: "jeremiah",
    author: "Jeremiah",
    dateWritten: "~627–585 BC",
    summary:
      "Jeremiah records the warnings of the weeping prophet to Judah before and during the Babylonian exile. Despite facing rejection, Jeremiah faithfully proclaimed God's judgment and the promise of a new covenant.",
    themes: ["Judgment", "New Covenant", "Repentance", "Faithfulness", "Suffering"],
  },
  lamentations: {
    slug: "lamentations",
    author: "Jeremiah",
    dateWritten: "~586 BC",
    summary:
      "Lamentations is a collection of five poems mourning the destruction of Jerusalem and the temple by Babylon. Even in grief, it expresses trust in God's faithfulness and compassion.",
    themes: ["Grief", "Judgment", "God's Faithfulness", "Compassion", "Hope"],
  },
  ezekiel: {
    slug: "ezekiel",
    author: "Ezekiel",
    dateWritten: "~593–571 BC",
    summary:
      "Ezekiel prophesied to the Jewish exiles in Babylon, proclaiming God's judgment on Israel and the nations while offering visions of future restoration. His vivid imagery includes the valley of dry bones and a glorious future temple.",
    themes: ["God's Glory", "Judgment", "Restoration", "Visions", "Sovereignty"],
  },
  daniel: {
    slug: "daniel",
    author: "Daniel",
    dateWritten: "~536–530 BC",
    summary:
      "Daniel contains both narrative accounts of faithfulness in the Babylonian and Persian courts and apocalyptic visions of future kingdoms and God's ultimate victory. It demonstrates that God is sovereign over all earthly powers.",
    themes: ["Sovereignty", "Faithfulness", "Prophecy", "Kingdoms", "Endurance"],
  },
  hosea: {
    slug: "hosea",
    author: "Hosea",
    dateWritten: "~755–715 BC",
    summary:
      "Hosea uses the prophet's marriage to an unfaithful wife as a powerful metaphor for God's relationship with unfaithful Israel. Despite Israel's spiritual adultery, God's relentless love pursues restoration.",
    themes: ["God's Love", "Unfaithfulness", "Restoration", "Judgment", "Mercy"],
  },
  joel: {
    slug: "joel",
    author: "Joel",
    dateWritten: "~835–800 BC",
    summary:
      "Joel uses a devastating locust plague as a backdrop to call Judah to repentance and point to the coming Day of the Lord. It includes the famous promise of God pouring out His Spirit on all people.",
    themes: ["Day of the Lord", "Repentance", "Holy Spirit", "Restoration", "Judgment"],
  },
  amos: {
    slug: "amos",
    author: "Amos",
    dateWritten: "~760–750 BC",
    summary:
      "Amos, a shepherd called to prophesy, delivered a powerful message of social justice and judgment against Israel and surrounding nations. He condemned the exploitation of the poor and empty religious ritual.",
    themes: ["Social Justice", "Judgment", "Righteousness", "Hypocrisy", "God's Sovereignty"],
  },
  obadiah: {
    slug: "obadiah",
    author: "Obadiah",
    dateWritten: "~586–553 BC",
    summary:
      "Obadiah, the shortest book in the Old Testament, pronounces judgment on Edom for its pride and hostility toward Israel. It affirms that God will vindicate His people and establish His kingdom.",
    themes: ["Judgment on Pride", "Divine Justice", "Brotherhood", "God's Kingdom", "Vindication"],
  },
  jonah: {
    slug: "jonah",
    author: "Jonah",
    dateWritten: "~780–750 BC",
    summary:
      "Jonah tells the story of a reluctant prophet who fled from God's call to preach to Nineveh. When Nineveh repented, Jonah's anger revealed his own need to understand God's compassion for all nations.",
    themes: ["God's Compassion", "Obedience", "Repentance", "Missions", "Mercy"],
  },
  micah: {
    slug: "micah",
    author: "Micah",
    dateWritten: "~735–700 BC",
    summary:
      "Micah prophesied against social injustice and corruption in Judah and Israel while pointing to a coming ruler from Bethlehem. His famous summary of true religion — justice, mercy, and humility — remains a benchmark for godly living.",
    themes: ["Justice", "Mercy", "Humility", "Messianic Hope", "Judgment"],
  },
  nahum: {
    slug: "nahum",
    author: "Nahum",
    dateWritten: "~663–612 BC",
    summary:
      "Nahum proclaims God's judgment against Nineveh, the capital of the Assyrian Empire, for its cruelty and wickedness. It assures God's people that He is slow to anger but will not leave the guilty unpunished.",
    themes: ["God's Wrath", "Justice", "Comfort for the Oppressed", "Sovereignty", "Judgment"],
  },
  habakkuk: {
    slug: "habakkuk",
    author: "Habakkuk",
    dateWritten: "~612–589 BC",
    summary:
      "Habakkuk is a dialogue between the prophet and God about the problem of evil and injustice. It moves from questioning God's ways to a profound declaration of faith regardless of circumstances.",
    themes: ["Faith", "Questioning God", "Justice", "Sovereignty", "Joy in Suffering"],
  },
  zephaniah: {
    slug: "zephaniah",
    author: "Zephaniah",
    dateWritten: "~640–621 BC",
    summary:
      "Zephaniah warns of a coming Day of the Lord that will bring sweeping judgment on Judah and the nations. Yet it also offers a beautiful vision of God rejoicing over a restored remnant.",
    themes: ["Day of the Lord", "Judgment", "Remnant", "Restoration", "God's Joy"],
  },
  haggai: {
    slug: "haggai",
    author: "Haggai",
    dateWritten: "~520 BC",
    summary:
      "Haggai urged the returned exiles to prioritize rebuilding the temple, which they had neglected in favor of their own homes. His message reminds us to put God first in our priorities.",
    themes: ["Priorities", "Temple Rebuilding", "Obedience", "God's Presence", "Encouragement"],
  },
  zechariah: {
    slug: "zechariah",
    author: "Zechariah",
    dateWritten: "~520–480 BC",
    summary:
      "Zechariah encouraged the rebuilding of the temple through a series of night visions and messianic prophecies. It contains some of the most detailed Old Testament prophecies about the coming Messiah.",
    themes: ["Messianic Prophecy", "Restoration", "Visions", "God's Jealousy", "Hope"],
  },
  malachi: {
    slug: "malachi",
    author: "Malachi",
    dateWritten: "~433–400 BC",
    summary:
      "Malachi, the last Old Testament prophet, confronted the people's spiritual apathy, corrupt worship, and broken marriages. He pointed to a coming messenger who would prepare the way for the Lord.",
    themes: ["Faithfulness", "Worship", "Tithing", "Messenger", "Covenant"],
  },
  matthew: {
    slug: "matthew",
    author: "Matthew (Levi)",
    dateWritten: "~AD 55–65",
    summary:
      "Matthew presents Jesus as the promised Messiah and King of the Jews, tracing His lineage to Abraham and David. It contains major teaching blocks including the Sermon on the Mount and emphasizes the kingdom of heaven.",
    themes: ["Kingdom of Heaven", "Messianic Fulfillment", "Discipleship", "Righteousness", "Teaching"],
  },
  mark: {
    slug: "mark",
    author: "John Mark",
    dateWritten: "~AD 55–65",
    summary:
      "Mark is the shortest and most fast-paced Gospel, presenting Jesus as the suffering servant who came to serve and give His life as a ransom. It emphasizes action and the immediate impact of Jesus' ministry.",
    themes: ["Servant Leadership", "Suffering", "Action", "Faith", "Discipleship"],
  },
  luke: {
    slug: "luke",
    author: "Luke",
    dateWritten: "~AD 59–63",
    summary:
      "Luke provides the most comprehensive account of Jesus' life, emphasizing His compassion for the marginalized — the poor, women, Samaritans, and sinners. Written as a careful historical narrative, it highlights Jesus as the Savior of all people.",
    themes: ["Compassion", "Universal Salvation", "Holy Spirit", "Prayer", "Joy"],
  },
  john: {
    slug: "john",
    author: "John (the Apostle)",
    dateWritten: "~AD 85–95",
    summary:
      "John presents Jesus as the eternal Word of God who became flesh, using seven signs and seven 'I am' statements to reveal His divine identity. It was written so that readers might believe and have life in His name.",
    themes: ["Deity of Christ", "Belief", "Eternal Life", "Signs", "Love"],
  },
  acts: {
    slug: "acts",
    author: "Luke",
    dateWritten: "~AD 63–64",
    summary:
      "Acts records the birth and rapid growth of the early church from Jerusalem to Rome, empowered by the Holy Spirit. It follows the apostles — especially Peter and Paul — as they spread the gospel across the Roman world.",
    themes: ["Holy Spirit", "Church Growth", "Mission", "Boldness", "Unity"],
  },
  romans: {
    slug: "romans",
    author: "Paul",
    dateWritten: "~AD 57",
    summary:
      "Romans is Paul's most systematic presentation of the gospel, explaining humanity's need for salvation, justification by faith, and the implications of life in the Spirit. It is considered the theological foundation of Christian doctrine.",
    themes: ["Justification by Faith", "Grace", "Righteousness", "Sanctification", "God's Sovereignty"],
  },
  "1-corinthians": {
    slug: "1-corinthians",
    author: "Paul",
    dateWritten: "~AD 55",
    summary:
      "1 Corinthians addresses practical problems in the church at Corinth including division, immorality, lawsuits, and questions about worship and spiritual gifts. It includes the famous love chapter and teaching on the resurrection.",
    themes: ["Church Unity", "Love", "Spiritual Gifts", "Resurrection", "Holiness"],
  },
  "2-corinthians": {
    slug: "2-corinthians",
    author: "Paul",
    dateWritten: "~AD 55–56",
    summary:
      "2 Corinthians is Paul's most personal letter, defending his apostleship and revealing his sufferings for the gospel. It teaches that God's power is made perfect in weakness and calls believers to generous giving.",
    themes: ["Strength in Weakness", "Ministry", "Generosity", "Reconciliation", "Comfort"],
  },
  galatians: {
    slug: "galatians",
    author: "Paul",
    dateWritten: "~AD 49–55",
    summary:
      "Galatians passionately defends the gospel of grace against those requiring Gentile believers to follow the Mosaic Law. Paul argues that justification comes through faith alone and that believers are free in Christ.",
    themes: ["Freedom in Christ", "Justification by Faith", "Grace vs. Law", "Holy Spirit", "New Creation"],
  },
  ephesians: {
    slug: "ephesians",
    author: "Paul",
    dateWritten: "~AD 60–62",
    summary:
      "Ephesians unfolds God's eternal plan to unite all things in Christ, describing the spiritual blessings of believers and the calling to live as one body. It covers doctrine, church unity, and practical Christian conduct.",
    themes: ["Unity in Christ", "Spiritual Blessings", "Church", "Spiritual Warfare", "Grace"],
  },
  philippians: {
    slug: "philippians",
    author: "Paul",
    dateWritten: "~AD 61–62",
    summary:
      "Philippians is a joyful letter written from prison, encouraging believers to find joy in Christ regardless of circumstances. It contains the great Christ-hymn describing Jesus' humility and exaltation.",
    themes: ["Joy", "Humility", "Contentment", "Unity", "Christ's Exaltation"],
  },
  colossians: {
    slug: "colossians",
    author: "Paul",
    dateWritten: "~AD 60–62",
    summary:
      "Colossians counters false teaching by proclaiming the supremacy and sufficiency of Christ over all creation and spiritual powers. It calls believers to set their minds on things above and live transformed lives.",
    themes: ["Supremacy of Christ", "Fullness in Christ", "False Teaching", "New Life", "Wisdom"],
  },
  "1-thessalonians": {
    slug: "1-thessalonians",
    author: "Paul",
    dateWritten: "~AD 51",
    summary:
      "1 Thessalonians, likely Paul's earliest letter, encourages a young church facing persecution and answers questions about Christ's return. It calls believers to holy living and offers comfort regarding those who have died in Christ.",
    themes: ["Christ's Return", "Holy Living", "Encouragement", "Faith", "Hope"],
  },
  "2-thessalonians": {
    slug: "2-thessalonians",
    author: "Paul",
    dateWritten: "~AD 51–52",
    summary:
      "2 Thessalonians corrects misunderstandings about the Day of the Lord, warning that certain events must occur first. It encourages perseverance under persecution and warns against idleness.",
    themes: ["Day of the Lord", "Perseverance", "Discipline", "Truth", "God's Justice"],
  },
  "1-timothy": {
    slug: "1-timothy",
    author: "Paul",
    dateWritten: "~AD 63–65",
    summary:
      "1 Timothy is a pastoral letter guiding the young leader Timothy in organizing and leading the church at Ephesus. It covers qualifications for church leaders, sound doctrine, and godly conduct.",
    themes: ["Church Leadership", "Sound Doctrine", "Godliness", "Pastoral Care", "Faith"],
  },
  "2-timothy": {
    slug: "2-timothy",
    author: "Paul",
    dateWritten: "~AD 66–67",
    summary:
      "2 Timothy is Paul's final letter, written from prison before his execution, urging Timothy to remain faithful and bold in preaching the Word. It contains the famous declaration that all Scripture is God-breathed.",
    themes: ["Endurance", "Scripture", "Faithfulness", "Legacy", "Boldness"],
  },
  titus: {
    slug: "titus",
    author: "Paul",
    dateWritten: "~AD 63–65",
    summary:
      "Titus is a pastoral letter instructing Titus on establishing orderly churches in Crete, including appointing qualified elders and promoting sound doctrine. It emphasizes that grace teaches believers to live godly lives.",
    themes: ["Church Order", "Sound Doctrine", "Grace", "Good Works", "Leadership"],
  },
  philemon: {
    slug: "philemon",
    author: "Paul",
    dateWritten: "~AD 60–62",
    summary:
      "Philemon is a brief personal letter in which Paul appeals to a slave owner to receive back his runaway slave Onesimus — now a fellow believer — as a brother in Christ. It demonstrates the transforming power of the gospel in social relationships.",
    themes: ["Forgiveness", "Reconciliation", "Brotherhood", "Grace", "Appeal"],
  },
  hebrews: {
    slug: "hebrews",
    author: "Unknown",
    dateWritten: "~AD 60–70",
    summary:
      "Hebrews demonstrates the superiority of Christ over the old covenant — above angels, Moses, the Levitical priesthood, and the sacrificial system. It calls wavering Jewish Christians to persevere in faith with a stirring hall of faith in chapter 11.",
    themes: ["Superiority of Christ", "Faith", "Perseverance", "New Covenant", "High Priest"],
  },
  james: {
    slug: "james",
    author: "James (brother of Jesus)",
    dateWritten: "~AD 45–49",
    summary:
      "James is a practical letter that insists genuine faith must produce action. It covers topics like trials, wisdom, favoritism, taming the tongue, and the relationship between faith and works.",
    themes: ["Faith and Works", "Wisdom", "Trials", "Speech", "Practical Holiness"],
  },
  "1-peter": {
    slug: "1-peter",
    author: "Peter",
    dateWritten: "~AD 64–65",
    summary:
      "1 Peter encourages believers suffering persecution to stand firm in their faith and live as strangers in this world. It grounds their hope in Christ's suffering and the living hope of the resurrection.",
    themes: ["Suffering", "Hope", "Holy Living", "Submission", "Identity in Christ"],
  },
  "2-peter": {
    slug: "2-peter",
    author: "Peter",
    dateWritten: "~AD 66–68",
    summary:
      "2 Peter warns against false teachers and scoffers who deny Christ's return. It calls believers to grow in knowledge and godliness while affirming the certainty of God's promises and the coming Day of the Lord.",
    themes: ["False Teaching", "Christ's Return", "Spiritual Growth", "Knowledge", "God's Promises"],
  },
  "1-john": {
    slug: "1-john",
    author: "John (the Apostle)",
    dateWritten: "~AD 85–95",
    summary:
      "1 John combats false teaching about Jesus' identity while assuring believers of their salvation. It establishes tests of genuine faith: right belief about Christ, obedience to God's commands, and love for one another.",
    themes: ["Love", "Assurance", "Truth", "Fellowship", "Light vs. Darkness"],
  },
  "2-john": {
    slug: "2-john",
    author: "John (the Apostle)",
    dateWritten: "~AD 85–95",
    summary:
      "2 John is a brief letter urging a church to walk in truth and love while warning against showing hospitality to false teachers who deny Christ's incarnation.",
    themes: ["Truth", "Love", "Discernment", "False Teaching", "Obedience"],
  },
  "3-john": {
    slug: "3-john",
    author: "John (the Apostle)",
    dateWritten: "~AD 85–95",
    summary:
      "3 John commends Gaius for his faithful hospitality to traveling missionaries and contrasts him with Diotrephes, who selfishly sought preeminence in the church. It highlights the importance of supporting gospel workers.",
    themes: ["Hospitality", "Truth", "Leadership", "Generosity", "Faithfulness"],
  },
  jude: {
    slug: "jude",
    author: "Jude (brother of Jesus)",
    dateWritten: "~AD 65–80",
    summary:
      "Jude is a short, urgent letter warning against false teachers who have infiltrated the church and perverted the grace of God. It calls believers to contend earnestly for the faith and ends with a powerful doxology.",
    themes: ["Contending for Faith", "False Teachers", "Judgment", "Perseverance", "Doxology"],
  },
  revelation: {
    slug: "revelation",
    author: "John (the Apostle)",
    dateWritten: "~AD 95",
    summary:
      "Revelation is a prophetic and apocalyptic vision given to John on the island of Patmos, revealing the ultimate triumph of God and the Lamb over evil. It encompasses letters to seven churches, cosmic judgments, and the glorious vision of the new heaven and new earth.",
    themes: ["God's Victory", "Christ's Return", "Judgment", "Worship", "New Creation"],
  },
};
