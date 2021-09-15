const quotes = [
    {
        quote: "날 쏘고 가라!",
        movie: "실미도"
    },
    {
        quote: "느그아부미 머하시노",
        movie: "친구"
    },
    {
        quote: "너나 잘하세요~",
        movie: "친절한 금자씨"
    },
    {
        quote: "쫄리면 뒈지시던가!",
        movie: "타짜"
    },
    {
        quote: "내가 인마 느그 서장이랑 인마 어저께도 같이 밥 묵고! 싸우나도 같이 가고! 마 X새꺄 마 다했으!",
        movie: "범죄와의 전쟁"
    },
    {
        quote: "야 이거 방탄유리야 개XX야!",
        movie: "아저씨"
    },
    {
        quote: "꼭 그렇게 다 가져가야만 속이 후련했냐!!",
        movie: "해바라기"
    },
    {
        quote: "가장 완벽한 계획이 뭔지 알아? 무계획이야. 계획을 하면 모든 계획이 다 계획대로 되지 않는 게 인생이거든. ",
        movie: "기생충"
    },
    {
        quote: "어찌, 내가 왕이 될 상인가?",
        movie: "관상"
    },
    {
        quote: "살려는 드릴게",
        movie: "신세계"
    }
]
const quote = document.querySelector("#quote");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote + "-" + todayQuote.movie + "-";