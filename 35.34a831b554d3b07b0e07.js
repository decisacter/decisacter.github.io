(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{118:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h3",[e._v("Common ML Problems")]),e._v(" "),a("div",{staticClass:"devsite-article-body clearfix expandable-container"},[a("p"),e._v(" "),e._m(0),e._v(" "),a("p",[e._v("Often, people talk about ML as having two paradigms, supervised and unsupervised\n    learning. However, it is more accurate to describe ML problems as falling along\n    a spectrum of supervision between supervised and unsupervised learning. For the\n    sake of simplicity, this course will focus on the two extremes of this spectrum.")]),e._v(" "),a("devsite-heading",{attrs:{text:"What is Supervised Learning?",for:"what-is-supervised-learning",level:"h2",link:"","back-to-top":""}},[a("h2",[e._v("What is Supervised Learning?"),a("a",{staticClass:"devsite-back-to-top-link material-icons",attrs:{href:"#top_of_page","data-title":"Back to top"}})])]),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("For example, suppose you are an amateur botanist determined to differentiate\n    between two species of the Lilliputian plant genus (a completely made-up plant).\n    The two species look pretty similar. Fortunately, a botanist has put together a\n    data set of Lilliputian plants she found in the wild along with their species\n    name.")]),e._v(" "),a("p",[e._v("Here's a snippet of that data set:")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),a("p",[e._v("Suppose we graph the leaf width and leaf length and then color-code\n    the species.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),a("p",[e._v("Now that a model exists, you can use that model to classify new\n    plants that you find in the jungle. For example:")]),e._v(" "),e._m(8),e._v(" "),a("p",[e._v("To tie it all together, supervised machine learning finds patterns between data\n    and labels that can be expressed mathematically as functions. Given an input\n    feature, you are telling the system what the expected output label is, thus you\n    are supervising the training. The ML system will learn patterns on this labeled\n    data. In the future, the ML system will use these patterns to make predictions on data that\n    it did not see during training.")]),e._v(" "),e._m(9),e._v(" "),a("devsite-heading",{attrs:{text:"Unsupervised Learning",for:"unsupervised-learning",level:"h2",link:"","back-to-top":""}},[a("h2",[e._v("Unsupervised Learning"),a("a",{staticClass:"devsite-back-to-top-link material-icons",attrs:{href:"#top_of_page","data-title":"Back to top"}})])]),e._v(" "),a("p",[e._v("In unsupervised learning, the goal is to identify meaningful patterns in the\n    data. To accomplish this, the machine must learn from an unlabeled data set.\n    In other words, the model has no hints how to categorize each piece of data and\n    must infer its own rules for doing so.")]),e._v(" "),a("p",[e._v("In the following graph, all the examples are the same shape because we don't\n    have labels to differentiate between examples of one type or another here:")]),e._v(" "),e._m(10),e._v(" "),a("p",[e._v("Fitting a line to unlabeled points isn't helpful. We still end up with examples\n    of the same shape on both sides of the line. Clearly we will have to try a\n    different approach.")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),a("devsite-heading",{attrs:{text:"Types of ML Problems",for:"types-of-ml-problems",level:"h2",link:"","back-to-top":""}},[a("h2",[e._v("Types of ML Problems"),a("a",{staticClass:"devsite-back-to-top-link material-icons",attrs:{href:"#top_of_page","data-title":"Back to top"}})])]),e._v(" "),a("p",[e._v("There are several subclasses of ML problem based on what the prediction task\n    looks like. In the table below, you can see examples of common supervised and\n    unsupervised ML problems.")]),e._v(" "),e._m(18),e._v(" "),a("devsite-heading",{attrs:{text:"Check Your Understanding",for:"check-your-understanding",level:"h3",link:""}},[a("h3",[e._v("Check Your Understanding")])]),e._v(" "),a("devsite-multiple-choice",{attrs:{ready:""}},[a("div",{staticClass:"devsite-multiple-choice-question"},[e._v("Which ML problem is an example of unsupervised learning? Click on an\n      answer to expand the section and check your response.")]),e._v(" "),a("div",{staticClass:"devsite-multiple-choice-answer",attrs:{"answer-id":"1",tabindex:"0",role:"button"}},[a("div",{staticClass:"devsite-multiple-choice-option"},[e._v("Clustering")]),e._v(" "),a("div",{staticClass:"devsite-multiple-choice-explanation"},[e._v("Clustering is typically done when labeled data is not available.\n        This is an "),a("i",[e._v("unsupervised")]),e._v(" learning problem.")])]),e._v(" "),a("div",{staticClass:"devsite-multiple-choice-answer",attrs:{"answer-id":"3",tabindex:"0",role:"button"}},[a("div",{staticClass:"devsite-multiple-choice-option"},[e._v("Classification")]),e._v(" "),a("div",{staticClass:"devsite-multiple-choice-explanation"},[e._v("Classification requires a set of labels for the model to assign to a\n        given item. This is a supervised learning problem.")])]),e._v(" "),a("div",{staticClass:"devsite-multiple-choice-answer",attrs:{"answer-id":"4",tabindex:"0",role:"button"}},[a("div",{staticClass:"devsite-multiple-choice-option"},[e._v("Regression")]),e._v(" "),a("div",{staticClass:"devsite-multiple-choice-explanation"},[e._v("Regression requires labeled numerical data.\n        This is a supervised learning problem.")])]),e._v(" "),a("div",{staticClass:"devsite-multiple-choice-answer",attrs:{"answer-id":"2",tabindex:"0",role:"button"}},[a("div",{staticClass:"devsite-multiple-choice-option"},[e._v("Structured output")]),e._v(" "),a("div",{staticClass:"devsite-multiple-choice-explanation"},[e._v("Complex outputs require complex labeled data.\n        This is a supervised learning problem.")])])]),e._v(" "),a("devsite-heading",{attrs:{text:"Contrasting Cases",for:"contrasting-cases",level:"h2",link:"","back-to-top":""}},[a("h2",[e._v("Contrasting Cases"),a("a",{staticClass:"devsite-back-to-top-link material-icons",attrs:{href:"#top_of_page","data-title":"Back to top"}})])]),e._v(" "),a("p",[e._v("As you walk through each example, note the types of data used and how that data\n    informed the product design and iterations. Think about how the examples compare\n    to and contrast from each other. Click on each product name button to see more\n    information below.")]),e._v(" "),a("devsite-selector",{attrs:{active:"smart-reply"}},[a("devsite-tabs",{attrs:{role:"tablist",connected:""}},[a("div",{staticClass:"devsite-tabs-wrapper"},[a("tab",{attrs:{role:"tab","aria-selected":"true",tab:"smart-reply",active:""}},[a("a",{attrs:{href:"#smart-reply"}},[e._v("Smart Reply")])]),e._v(" "),a("tab",{attrs:{role:"tab","aria-selected":"false",tab:"youtube-watch-next"}},[a("a",{attrs:{href:"#youtube-watch-next"}},[e._v("YouTube Watch Next")])]),e._v(" "),a("tab",{attrs:{role:"tab","aria-selected":"false",tab:"cucumber-sorting"}},[a("a",{attrs:{href:"#cucumber-sorting"}},[e._v("Cucumber Sorting")])]),e._v(" "),a("tab",{attrs:{"overflow-tab":"",hidden:""}},[a("a",{staticClass:"devsite-icon devsite-icon-arrow-drop-down",attrs:{href:"#"}},[e._v("More")]),e._v(" "),a("div",{staticClass:"devsite-tabs-overflow-menu",attrs:{scrollbars:"",hidden:""}})])],1)]),e._v(" "),a("section",{attrs:{tab:"smart-reply",role:"tabpanel",tabindex:"0",active:""}},[a("p",[e._v("Suggested short responses to emails.")]),e._v(" "),a("p",[e._v("Smart Reply is an example of ML that utilizes Natural Language\n        Understanding (NLU) and generation, sequence-to-sequence learning,\n        to make replying to a flooded inbox far less painful.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://research.googleblog.com/2015/11/computer-respond-to-this-email.html"}},[e._v("Computer, respond to this email")])]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.kdd.org/kdd2016/papers/files/Paper_1069.pdf"}},[e._v("Smart Reply: Automated Response Suggestion for Email")]),e._v(" (2016 article)")])])]),e._v(" "),a("section",{attrs:{tab:"youtube-watch-next",role:"tabpanel",tabindex:"0"}},[a("p",[e._v("YouTube Watch Next uses ML to generate the list of video recommendations\n        after you've watched a video on YouTube. It is a large scale recommendation\n        system using deep networks to generate and rank potential videos.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://research.google.com/pubs/pub45530.html"}},[e._v("Deep Neural Networks for YouTube Recommendations")])])])]),e._v(" "),a("section",{attrs:{tab:"cucumber-sorting",role:"tabpanel",tabindex:"0"}},[a("p",[e._v("See how a cucumber farmer is using machine learning to sort cucumbers by\n        size, shape, color, and other attributes.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://cloud.google.com/blog/big-data/2016/08/how-a-japanese-cucumber-farmer-is-using-deep-learning-and-tensorflow"}},[e._v("How a Japanese cucumber farmer is using deep learning and TensorFlow")])])])])],1),e._v(" "),a("devsite-heading",{attrs:{text:"Thought Questions",for:"thought-questions",level:"h3",link:""}},[a("h3",[e._v("Thought Questions")])]),e._v(" "),a("p",[e._v("Think about the similarities and differences between each of the above cases.\n    Click on the plus icon to expand the section and reveal the answers.")]),e._v(" "),a("devsite-expandable",{attrs:{label:"thought question 1","is-upgraded":"",id:"expandable-1"}},[a("a",{staticClass:"exw-control",attrs:{"aria-controls":"expandable-1","aria-expanded":"false",tabindex:"0",role:"button"}}),e._v(" "),a("devsite-heading",{attrs:{text:"What user problem did these systems solve?",for:"what-user-problem-did-these-systems-solve",level:"h4",link:""}},[a("h4",[e._v("What user problem did these systems solve?")])]),e._v(" "),a("p",[e._v("In all three cases there was motivation to build an ML system to address a\n      real problem users were facing.\n\n    ")]),e._v(" "),a("ul",[a("li",[e._v("Smart Reply: responding to emails can take up too much time\n      ")]),e._v(" "),a("li",[e._v("YouTube: there are too many videos on YouTube for one person to navigate\n        and find videos they like")]),e._v(" "),a("li",[e._v("Cucumber sorter: the cucumber sorting process is burdensome")])]),e._v(" "),a("p")],1),e._v(" "),a("devsite-expandable",{attrs:{label:"thought question 2","is-upgraded":"",id:"expandable-2"}},[a("a",{staticClass:"exw-control",attrs:{"aria-controls":"expandable-2","aria-expanded":"false",tabindex:"0",role:"button"}}),e._v(" "),a("devsite-heading",{attrs:{text:"What does output from these systems look like?",for:"what-does-output-from-these-systems-look-like",level:"h4",link:""}},[a("h4",[e._v("What does output from these systems look like?")])]),e._v(" "),a("p",[e._v("Each is a bit different.\n\n    ")]),e._v(" "),a("ul",[a("li",[e._v("Smart Reply: three short suggested responses at the bottom of an email\n      ")]),e._v(" "),a("li",[e._v("YouTube: suggested videos along the right-hand side of the screen")]),e._v(" "),a("li",[e._v("Cucumber sorter: directions to a robot arm that sorts cucumbers into\n        their correct categories")])]),e._v(" "),a("p")],1),e._v(" "),a("devsite-expandable",{attrs:{label:"thought question 3","is-upgraded":"",id:"expandable-3"}},[a("a",{staticClass:"exw-control",attrs:{"aria-controls":"expandable-3","aria-expanded":"false",tabindex:"0",role:"button"}}),e._v(" "),a("devsite-heading",{attrs:{text:"What data sources were used?",for:"what-data-sources-were-used",level:"h4",link:""}},[a("h4",[e._v("What data sources were used?")])]),e._v(" "),a("p",[e._v("In all three cases the large amounts of historical data had information\n      closely tied to what we wanted to do.\n\n    ")]),e._v(" "),a("ul",[a("li",[e._v("Smart Reply: conversation data (email messages and responses)")]),e._v(" "),a("li",[e._v("YouTube: watch time, click-through rate, watch history, search history\n      ")]),e._v(" "),a("li",[e._v("Cucumber sorter: exemplary cucumber data (size, shape, weight, etc.)")])]),e._v(" "),a("p")],1)],1)])};s._withStripped=!0;var i={},n=a(0),r=Object(n.a)(i,s,[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In basic terms, ML is the process of training a piece of software, called a\n    "),t("a",{attrs:{href:"/machine-learning/glossary#model"}},[t("b",[this._v("model")])]),this._v(",\n    to make useful predictions using a data set. This predictive model can then\n    serve up predictions about previously unseen data.\n    We use these predictions to take action in a product; for example, the system\n    predicts that a user will like a certain video, so the system recommends that\n    video to the user.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Supervised learning is a type of ML where the model is provided with\n    "),t("a",{attrs:{href:"/machine-learning/glossary#label"}},[t("b",[this._v("labeled")])]),this._v(" training data.\n    But what does that mean?")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"devsite-table-wrapper"},[a("table",[a("thead",[a("tr",[a("th",[e._v("Leaf Width")]),e._v(" "),a("th",[e._v("Leaf Length")]),e._v(" "),a("th",[e._v("Species")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("2.7")]),e._v(" "),a("td",[e._v("4.9")]),e._v(" "),a("td",[e._v("small-leaf")])]),e._v(" "),a("tr",[a("td",[e._v("3.2")]),e._v(" "),a("td",[e._v("5.5")]),e._v(" "),a("td",[e._v("big-leaf")])]),e._v(" "),a("tr",[a("td",[e._v("2.9")]),e._v(" "),a("td",[e._v("5.1")]),e._v(" "),a("td",[e._v("small-leaf")])]),e._v(" "),a("tr",[a("td",[e._v("3.4")]),e._v(" "),a("td",[e._v("6.8")]),e._v(" "),a("td",[e._v("big-leaf")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Leaf width and leaf length are the\n    "),t("a",{attrs:{href:"/machine-learning/glossary#feature"}},[t("b",[this._v("features")])]),this._v('\n    (which is why the graph below labels both of these dimensions as X),\n    while the species is the label.\n    A real life botanical data set would probably contain\n    far more features (including descriptions of flowers, blooming times,\n    arrangement of leaves) but still have only one label.\n    Features are measurements or descriptions; the label\n    is essentially the "answer." For example, the goal of\n    the data set is to help other botanists answer the question, "Which\n    species is this plant?"')])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This data set consists of only four\n    "),t("a",{attrs:{href:"/machine-learning/glossary#example"}},[t("b",[this._v("examples")])]),this._v(".\n    A real life data set would likely contain vastly more examples.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/machine-learning/problem-framing/images/Graph1.svg",alt:"Two sets of dots graphed on a Cartesian plane. One set represents the\nsmall-leaf variety, and the other set represents the big-leaf variety. Both sets\nof points have about the same positive slope; however, the y-intercept of the\nbig-leaf variety has a higher y-intercept than the small-leaf variety."}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In "),t("a",{attrs:{href:"/machine-learning/glossary#supervised_machine_learning"}},[t("b",[this._v("supervised machine learning")])]),this._v(",\n    you feed the features and their corresponding labels into an algorithm in a\n    process called\n    "),t("a",{attrs:{href:"/machine-learning/glossary#training"}},[t("b",[this._v("training")])]),this._v(".\n    During training, the algorithm gradually determines the relationship\n    between features and their corresponding labels. This relationship\n    is called the\n    "),t("a",{attrs:{href:"/machine-learning/glossary#model"}},[t("b",[this._v("model")])]),this._v(".\n    Often times in machine learning, the model is very complex. However,\n    suppose that this model can be represented as a line that separates big-leaf\n    from small-leaf:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/machine-learning/problem-framing/images/Graph2.svg",alt:"Same graph as above, but with a line separating the big-leaf variety from the\nsmall-leaf variety. The line has about the same slope as the big-leaf graph and\nthe small-leaf graph, but has a y-intercept roughly half-way between that of the\nbig-leaf graph and the small-leaf graph. This line is the pattern."}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/machine-learning/problem-framing/images/Graph3.svg",alt:"Same chart as the previous, but with new points added. The new points that\nfall on one side of the pattern are big-leaf variety and those that fall on the\nother side are small-leaf variety. "}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("An exciting real-world example of supervised learning is a\n    "),t("a",{attrs:{href:"https://news.stanford.edu/2017/01/25/artificial-intelligence-used-identify-skin-cancer/"}},[this._v("study from Stanford University")]),this._v("\n    that used a model to detect skin cancer in images.\n    In this case, the training set contained images of skin labeled by\n    dermatologists as having one of several diseases.\n    The ML system found signals that indicate each disease from its training set,\n    and used those signals to make predictions on new, unlabeled images.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/machine-learning/problem-framing/images/Graph4.svg"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/machine-learning/problem-framing/images/Graph5.svg",alt:"The same blob of points as in the previous graph, now with an unhelpful line\nthrough them."}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Here, we have two clusters. (Note that the number of clusters is arbitrary).\n    What do these clusters represent? It can be difficult to say.\n    Sometimes the model finds patterns in the data that you don't want it to learn,\n    such as stereotypes or "),t("a",{attrs:{href:"/machine-learning/glossary#bias_ethics"}},[t("b",[this._v("bias")])]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/machine-learning/problem-framing/images/Graph6.svg",alt:"The same blob of points as in the previous two graphs. Now, however, two\ndisjoint rectangles each wrap a different set of points in the blob. "}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("However, when new data arrives, we can categorize it pretty easily, assuming it\n    fits into a known cluster. But what if your photo clustering model has\n    never seen a "),t("a",{attrs:{href:"https://wikipedia.org/wiki/Pangolin"}},[this._v("pangolin")]),this._v(" before? Will the\n    system cluster the new photo with armadillos or maybe hedgehogs?\n    This course will talk more about the difficulties of unlabeled data and\n    clustering later on.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/machine-learning/problem-framing/images/Graph7.svg",alt:"The same Cartesian plane and identified clusters as the previous two graphs\n, this time with two new points. Each point falls distinctly into separate\nclusters."}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("aside",{staticClass:"note"},[t("b",[this._v("Note:")]),t("span",[this._v("While it is very common, clustering is not the only type of unsupervised\n      learning.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"devsite-table-wrapper"},[a("table",{staticClass:"cyan"},[a("tbody",[a("tr",[a("th",[e._v("Reinforcement Learning")])]),e._v(" "),a("tr",[a("td",[e._v("An additional branch of machine learning is\n            "),a("b",[e._v("reinforcement learning (RL)")]),e._v(". Reinforcement learning differs from\n            other types of machine learning. In RL you don't collect examples with\n            labels. Imagine you want to teach a machine to play a very basic video game\n            and never lose. You set up the model (often called an "),a("b",[e._v("agent")]),e._v(' in RL)\n            with the game, and you tell the model not to get a "game over" screen.\n            During training, the agent receives a reward when it performs this task,\n            which is called a reward function. With reinforcement learning, the agent\n            can learn very quickly how to outperform humans.\n\n            '),a("p",[e._v("The lack of a data requirement makes RL a tempting approach. However,\n              designing a good reward function is difficult, and RL models are less stable\n              and predictable than supervised approaches. Additionally, you need to\n              provide a way for the agent to interact with the game to produce data,\n              which means either building a physical agent that can interact with the real\n              world or a virtual agent and a virtual world, either of which is a big\n              challenge. See this\n              "),a("a",{attrs:{href:"https://www.alexirpan.com/2018/02/14/rl-hard.html"}},[e._v("blog post")]),e._v("\n              by Alex Irpan for an overview of the types of problems currently faced in RL.\n              Reinforcement learning is an active field of ML research, but in this course\n              we'll focus on supervised solutions because they're a better known problem,\n              more stable, and result in a simpler system.")]),e._v(" "),a("p",[e._v("For comprehensive information on RL, check out\n              "),a("a",{attrs:{href:"https://mitpress.mit.edu/books/reinforcement-learning"}},[a("i",[e._v("Reinforcement Learning: An Introduction")])]),e._v("\n              by Sutton and Barto.")])])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"devsite-table-wrapper"},[a("table",{staticClass:"blue"},[a("tbody",[a("tr",[a("th",[e._v("Type of ML Problem")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Example")])]),e._v(" "),a("tr",[a("td",[e._v("Classification")]),e._v(" "),a("td",[e._v("Pick one of N labels")]),e._v(" "),a("td",[e._v("Cat, dog, horse, or bear")])]),e._v(" "),a("tr",[a("td",[e._v("Regression")]),e._v(" "),a("td",[e._v("Predict numerical values")]),e._v(" "),a("td",[e._v("Click-through rate")])]),e._v(" "),a("tr",[a("td",[e._v("Clustering")]),e._v(" "),a("td",[e._v("Group similar examples")]),e._v(" "),a("td",[e._v("Most relevant documents (unsupervised)")])]),e._v(" "),a("tr",[a("td",[e._v("Association rule learning")]),e._v(" "),a("td",[e._v("Infer likely association patterns in data")]),e._v(" "),a("td",[e._v("If you buy hamburger buns, you're likely to buy hamburgers\n            (unsupervised)")])]),e._v(" "),a("tr",[a("td",[e._v("Structured output")]),e._v(" "),a("td",[e._v("Create complex output")]),e._v(" "),a("td",[e._v("Natural language parse trees, image recognition bounding boxes")])]),e._v(" "),a("tr",[a("td",[e._v("Ranking")]),e._v(" "),a("td",[e._v("Identify position on a scale or status")]),e._v(" "),a("td",[e._v("Search result ranking")])])])])])}],!1,null,null,null);r.options.__file="docs/ml/mlcc/problem-framing/CommonProblems.vue";t.default=r.exports}}]);