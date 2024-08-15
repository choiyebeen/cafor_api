export default function handler(req, res){
    console.log('get요청 시흥점')

    const result = {
        detail: [
            { product: "아메리카노", count: "3" },
            { product: "카페라떼", count: "3" },
            { product: "카라멜마끼야또", count: "0" },
            { product: "헤이즐럿라떼", count: "0" },
            { product: "카페모카", count: "2" },
            { product: "바닐라라떼", count: "2" },
            { product: "사이다", count: "0" },
            { product: "콜라", count: "2" },
            { product: "시트러스차", count: "2" },
            { product: "생강차", count: "2" },
            { product: "한라봉차", count: "2" },
            { product: "히비스커스차", count: "2" },
            { product: "자스민차", count: "2" },
            { product: "레몬차", count: "2" },
            { product: "오미자차", count: "2" },
            { product: "복숭아아이스티", count: "2" },
            { product: "플레인요거트스무디", count: "2" },
            { product: "블루베리요거트스무디", count: "2" },
            { product: "딸기요거트스무디", count: "2" },
            { product: "망고요거트스무디", count: "2" },
            { product: "자몽에이드", count: "2" },
            { product: "청포도에이드", count: "2" },
            { product: "레몬에이드", count: "2" },
            { product: "컵쿠키", count: "2" },
            { product: "쿠키", count: "2" },
            { product: "아이스크림", count: "2" },
            { product: "마카롱", count: "2" },
            { product: "커피콩빵", count: "2" }
        ]
    };

    res.status(200).json(result);
}