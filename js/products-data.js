// ============================================
// 상품 데이터
// ============================================
// 이 파일은 모든 상품 정보를 담고 있는 데이터 객체입니다.
// 베스트 상품, 신상품, 특가 상품으로 구분되어 있습니다.

// 상품 데이터 객체
const productsData = {
    // 베스트 상품 목록
    best: [
        {
            id: 1,
            title: '와이어링 제본기 WS-15 +',
            price: 68000,
            salePrice: 59900,
            discount: 43,
            rating: 4.5,
            reviews: 1234,
            image: 'https://www.hd2.co.kr/web/product/big/202510/262c9c4fad600556509114366ab4ab21.jpg',
            images: [
                'https://www.hd2.co.kr/web/product/small/202510/05b1f35588645525bb8f87b592477e7c.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/94b39138baa885921e3f43ac4b196067.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/e6222897488d22c03ac727ad0706a347.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/30ba0d0598b4094eebe7c32a463b5103.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/b0ac850e73c9b7f25dc40661c519839f.jpg'
            ],
            badge: 'sale',
            badgeText: '43%',
            description: `
                <h3>현대오피스 와이어링 제본기 WS-2001 원형천공 18매 제본140매 가정용 사무용
                </h3>
                <p>넓은 U자형 손잡이로 손쉬운 양손 천공 가정에서 소규모 사무실에서 개인용으로 ~ 아이들 교육자료나 회사서류정리!.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>1회 최대 18매의 강력한 천공력</li>
                    <li>쉽고 빠른 140매 제본</li>
                    <li>3단계 천공 마진 조절</li>
                    <li>IPX7 방수 등급으로 땀과 물에 강함</li>
                    <li>용지 규격 조절 레버</li>
                    <li>와이어링 규격 조절 레버</li>
                </ul>
                <h4>와이어 제본기 소모품 추천</h4>
                <ul>
                    <li>와이어링/크리스탈링/스틸코일링/클릭링</li>
                    <li>와이어링 탈착기</li>
                    <li>바인드락</li>
                </ul>
            `,
            spec: {
                '품명 및 모델명': '와이어링 제본기 NEW WS-2001',
                '제조/판매사': '현대오피스',
                '제조국': '중국/중국 현지 공장',
                '제품출시년월': '2024.02',
                '품질보증기준': '구입 후 1년 무상 A/S',
                'A/S안내': '현대오피스 1566-3445',
            },
            reviewList: [
                {
                    id: 1,
                    author: '김철수',
                    rating: 5,
                    date: '2024.01.15',
                    content: '처음 3번은 와이어링이 익숙하지 않아서 제본 실패했는데 이후에는 아주 잘 쓰고 있습니다.',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '이영희',
                    rating: 4,
                    date: '2024.01.12',
                    content: '굿굿, 그런데 사고나면 또 아쉬운점이 생기네요. 2만원 더주고 원형천공으로 살걸 그랬네요. 그래도 원하던 와이어링제본기라서 쭉 잘 쓸수 있겠어요.',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 3,
                    author: '박민수',
                    rating: 5,
                    date: '2024.01.10',
                    content: '묵직하니 댠단해보이구요 표지.0 .23했는데 흐느적거려요.담엔 더 두꺼운 걸로',
                    helpful: 156,
                    verified: true
                },
                {
                    id: 4,
                    author: '최지은',
                    rating: 4,
                    date: '2024.01.08',
                    content: '기존제품 10년쓰고 레버 연결부위 파손으로 재주문 했습니다. 레버 연결부 개선되었네요.',
                    helpful: 98,
                    verified: false
                },
                {
                    id: 5,
                    author: '정대현',
                    rating: 5,
                    date: '2024.01.05',
                    content: '동일 제품을 사용했었는데, 잘 사용했던 기억이 있어서 다시 구매하게 되었습니다. 만족합니다.',
                    helpful: 267,
                    verified: true
                }
            ]
        },
        {
            id: 2,
            title: '중형 문서세단기[PK-7012CD]',
            price: 119000,
            salePrice: 99000,
            discount: 36,
            rating: 4.6,
            reviews: 892,
            image: 'https://www.hd2.co.kr/web/product/big/202510/f8ab639f8758af33240039d19dd8d236.jpg',
            images: [
                'https://www.hd2.co.kr/web/product/small/202510/13fc549c9a5053e427d3a523470bfea4.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202507/063f51ff580693a1c69445e35087563f.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202507/39cd5779f0b5b4f061bedd32fb68d375.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202507/9f5b70697ed5aa51138a3a8137ba0529.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202507/26e23b5bc550283532fd3c4b1de9fc9d.jpg'
            ],
            badge: 'sale',
            badgeText: '36%',
            description: `
                <h3>PK-7012CD</h3>
                <p>책상 옆에 두고 사용하기 좋은  강력한 성능의 양쪽 투입형 중형 문서 세단기.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>문서 파쇄</li>
                    <li>안전 잠금 기능</li>
                    <li>자동 작동</li>
                    <li>역회전 기능</li>
                    <li>과열 보호</li>
                    <li>CD 파쇄</li>
                    <li>스테이플 / 카드 파쇄</li>
                </ul>
                <h4>제품 구조</h4>
                <ul>
                    <li>투입구</li>
                    <li>본체</li>
                    <li>이동 바퀴</li>
                    <li>분리형 바스켓</li>
                </ul>
            `,
            spec: {
                '제품 크기': '350(W) x 255(D) x 484(H) mm',
                '투입 폭': '220 mm (A4)',
                '세단 크기': '2 x 12 mm',
                '세단 형태': '마이크로 컷 (Micro Cut)',
                '세단 매수': '1회 12매',
                '연결': 'Wi-Fi, Bluetooth 5.0, GPS',
                '파지함 크기': '16L',
            },
            reviewList: [
                {
                    id: 1,
                    author: '이민지',
                    rating: 5,
                    date: '2024.01.14',
                    content: '대박.. 배송 속도 .. 쿠팡인 줄 알았어요.. 작동도 잘되고 작은 사무실에서 잘 쓰겠습니다!!',
                    helpful: 312,
                    verified: true
                },
                {
                    id: 2,
                    author: '강태영',
                    rating: 4,
                    date: '2024.01.11',
                    content: '소리가 너무 커요. 새거라서 잘 세단되요!!더 써봐야지 알겠지만 아직까지는 잘 쓰고는 있어요. 그런데 소리가 너무 커서 사무실 조용할 때 쓰면 좀 신경쓰여요.',
                    helpful: 245,
                    verified: true
                },
                {
                    id: 3,
                    author: '윤서연',
                    rating: 5,
                    date: '2024.01.09',
                    content: '사이즈는 좀작은데 여러장 넣어도 잘 갈려서 만족해요',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 4,
                    author: '조현우',
                    rating: 4,
                    date: '2024.01.07',
                    content: '양측에서 사용 가능한 장점과 서랍형으로 되어있어 사용이 편리해요. 다만 파쇄된 종이의 폭이 생각보다 커서 더 잘게 파쇄됐으면 하는 약간의 아쉬움이 살짝 있어요.',
                    helpful: 167,
                    verified: true
                }
            ]
        },
        {
            id: 3,
            title: '위조지폐 감별기 / 지폐 계수기 [V-650UV]',
            price: 235000,
            salePrice: 231000,
            discount: 30,
            rating: 4.8,
            reviews: 567,
            image: 'https://www.hd2.co.kr/web/product/big/202510/ebf8a43b10091afbc7608a0149645a65.jpg',
            images: [
                'https://www.hd2.co.kr/web/product/small/202510/9ca9d6ecb896aa19065b46c1497df2c1.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/e2b2a47dccf247ab2f84f9014c10f82f.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/7d16ff4631bd8fc569aa8f0849680cf3.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/6c34dcf414853bef7b74dbcd4f709e1c.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/55fdce38b2bda2eb7a00787c0d5e44b2.jpg'
            ],
            badge: 'sale',
            badgeText: '30%',
            description: `
                <h3>V-650UV 위조지폐 감별 지폐계수기</h3>
                <p>4가지 화폐 선택과 최고급 롤러로 오차 없이 다양한 지폐 계수</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>UV 감지</li>
                    <li>MG 감지</li>
                    <li>IR 감지</li>
                    <li>자동 시작 / 자동 정지</li>
                    <li>합산 기능</li>
                    <li>위조지폐 감지</li>
                </ul>
                <h4>제품 구조</h4>
                <ul>
                    <li>지폐 투입구</li>
                    <li>LCD 디스플레이</li>
                    <li>조작 버튼</li>
                    <li>DP 케이블</li>
                    <li>지폐 배출구</li>
                    <li>후면 커버</li>
                </ul>
            `,
            spec: {
                '모델명': 'V-650UV',
                '계수 속도': '약 1000매 / 분',
                '투입 용량': '약 200매',
                '배출 용량': '약 200매',
                '전원': 'AC 220V',
                '소비 전력': '약 60W',
            },
            reviewList: [
                {
                    id: 1,
                    author: '장성호',
                    rating: 5,
                    date: '2024.01.13',
                    content: '배송도 빠르고 제품 품질도 아주 만족스럽습니다. 디자인과 실용성 모두 기대 이상이라 기분 좋게 사용하고 있어요.',
                    helpful: 289,
                    verified: true
                },
                {
                    id: 2,
                    author: '한소영',
                    rating: 5,
                    date: '2024.01.11',
                    content: '깔끔하고 기능많고 있어보이고 쓰기편리하고 배송빠릅니다 제일 중요한 사항들이 모두만족!.',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 3,
                    author: '오준혁',
                    rating: 4,
                    date: '2024.01.09',
                    content: '저희 타 회사에서 사용해보고 같은걸로 주문하였는데 고객표시기까지 있으니 더 좋으네요 ~ 감사합니다.',
                    helpful: 156,
                    verified: true
                }
            ]
        },
        {
            id: 4,
            title: '대형 스테이플러 HDS-7100',
            price: 15500,
            salePrice: 9100,
            discount: 44,
            rating: 4.7,
            reviews: 892,
            image: 'https://www.hd2.co.kr/web/product/big/202601/1f29e9eb475fe1babbb0b01242a33135.jpg',
            images: [
                'https://www.hd2.co.kr/web/product/small/202601/c82752106eda41514394d8920a0d797c.jpg',
                'https://www.hd2.co.kr/web/product/small/202601/c82752106eda41514394d8920a0d797c.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202601/8353acb94a18dfc5450413b4212b9d2e.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202601/9cc26300d6fbd5ae390699717ca39646.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202601/22cc3acc051b51b04d15fb2c25b01a3a.jpg'
            ],
            badge: 'sale',
            badgeText: '44%',
            description: `
                <h3>대용량 스테이플러 HDS-7100</h3>
                <p>최대 50매까지 한 번에 강력한 펀칭 / 제본이 가능합니다.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>견고한 구조</li>
                    <li>넓은 삽입구</li>
                    <li>쉬운 스테이플</li>
                    <li>확실한 고정</li>
                    <li>간편한 교체</li>
                    <li>부드러운 작동</li>
                </ul>
            `,
            spec: {
                '제품 크기': '278(W) x 70(D) x 180(H) mm',
                '제본 매수': '최대 100매',
                '호침 사이즈': '23/6 ~ 23/10 호환',
                '페이퍼 가이드': '0.7 ~ 7cm 호환',
                '제품 무게': '0.75kg',
            },
            reviewList: [
                {
                    id: 1,
                    author: '송미라',
                    rating: 5,
                    date: '2024.01.12',
                    content: '빠른 배송 적당한 가격 좋습니다.',
                    helpful: 312,
                    verified: true
                },
                {
                    id: 2,
                    author: '윤태준',
                    rating: 4,
                    date: '2024.01.10',
                    content: '재본하려고 샀어요 잘쓰고 있습니다.',
                    helpful: 245,
                    verified: true
                },
                {
                    id: 3,
                    author: '김수진',
                    rating: 5,
                    date: '2024.01.08',
                    content: '작동 잘되고 좋네요.... 가정용으로 적합한듯. 사무용으로는 한단계 더 위에꺼 사세요.',
                    helpful: 189,
                    verified: true
                }
            ]
        },
        {
            id: 5,
            title: '휴대용 지폐계수기 V-70',
            price: 51200,
            salePrice: 49100,
            discount: 42,
            rating: 4.5,
            reviews: 456,
            image: 'https://www.hd2.co.kr/web/product/big/202510/648c4a9e8ff5ed6180ab9b205a142969.jpg',
            images: [
                'https://www.hd2.co.kr/web/product/small/202510/8d04e251d7853083dd129673ae45a52d.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/6a97ec71c4e9b62e18fa4ce276144a0b.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/a21db36b99a35c12c18f1c85ee5d2562.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/575540360620335ba4c4a9a7ffd9daf8.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/f13903e0934af37b81e4fd8bd7204299.jpg'
            ],
            badge: 'sale',
            badgeText: '42%',
            description: `
                <h3>휴대용 지폐계수기 V-70</h3>
                <p>휴대용 크기로 어디서든! 빠르고 편리한 실용적인 계수기!</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>간편한 사용</li>
                    <li>휴대 가능</li>
                    <li>분당 약 900매 계수</li>
                    <li>위조지폐 감지</li>
                    <li>간편한 조작</li>
                </ul>
            `,
            spec: {
                '모델명': 'V-70',
                '계수 속도': '약 600매 / 분',
                '전원': 'AC 220V',
                '소비 전력': '약 10W',
                '무게': '약 0.4kg',
                '제품 크기': '190mm x 102mm x 75mm',
            },
            reviewList: [
                {
                    id: 1,
                    author: '박지훈',
                    rating: 5,
                    date: '2024.01.11',
                    content: '직구 할려고 하다가 정식수입 유통제품 구입 배송 제품 맘에 듭니다.',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 2,
                    author: '이수진',
                    rating: 4,
                    date: '2024.01.09',
                    content: '부드럽게 계수도 되고 휴대하기도 좋아 동남아에서 사용 예정인데 벽돌 돈다발 셀때 아주 좋으네요.',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 3,
                    author: '최영수',
                    rating: 5,
                    date: '2024.01.07',
                    content: '진작 살껄요 일할때 매우 빠르고 편리합니다.',
                    helpful: 167,
                    verified: true
                }
            ]
        },
        {
            id: 6,
            title: 'N-402K 소형 가정용 미니 카운터 금고',
            price: 44000,
            salePrice: 27800,
            discount: 37,
            rating: 4.6,
            reviews: 234,
            image: 'https://www.hd2.co.kr/web/product/big/202510/8177c5d10e0b0339a5b374d8640562d1.jpg',
            images: [
                'https://www.hd2.co.kr/web/product/small/202510/5e7f6dfadb0aa8fd33af9cef95bb2676.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/419c9df73bebecd2113993cf25a47b74.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/5e90883d20f5efc357b45d74cc696ff1.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/d5ffcbbdfe559b953d8d7086d8dde277.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/f11886962da443ad8a0619662f3b51ef.jpg'
            ],
            badge: 'sale',
            badgeText: '37%',
            description: `
                <h3>N-402K 고급형 카운터 금고</h3>
                <p>스틸 소재로 튼튼한 열쇠 잠금 방식 금고.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>열쇠 잠금 방식</li>
                    <li>지폐 정리함</li>
                    <li>동전 트레이</li>
                    <li>이동 손잡이</li>
                    <li>견고한 스틸 재질</li>
                    <li>안전 구조 설계</li>
                </ul>
            `,
            spec: {
                '제품명': 'N-402K',
                '색상': '블랙 / 화이트',
                '재질': '스틸',
                '사이즈': '300 x 240 x 90 mm',
                '무게': '약 2.3kg',
            },
            reviewList: [
                {
                    id: 1,
                    author: '김민지',
                    rating: 5,
                    date: '2024.01.10',
                    content: '아이가 금고로 사달래서 구입했는데 너무 좋아하네요.',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 2,
                    author: '이동훈',
                    rating: 4,
                    date: '2024.01.08',
                    content: '평범한 돈통입니다. 창고에 보관을 오래 해 두신건지 안쪽에 칠이 까져 녹슨 부분이 있는건 아쉬웠어요.',
                    helpful: 134,
                    verified: true
                }
            ]
        },
        {
            id: 7,
            title: '작두형 재단기 HANDY CUTTER-340',
            price: 45000,
            salePrice: 27900,
            discount: 38,
            rating: 4.8,
            reviews: 678,
            image: 'https://www.hd2.co.kr/web/product/big/202510/db4608019ff9d174e71fa3445404d6ed.jpg',
            images: [
                'https://www.hd2.co.kr/web/product/small/202510/2bb8d6f750b0d3fe9b614a12e0f5e31b.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/09e5afc847a780220173fd38c9d75d5f.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/9fd939e1d1b06627170341dadbb9ae32.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/73b7c04ef8ca2612fa47d7ec5dcd07fe.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/f226019b63efb67b39a624bc7734f895.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>작두형 재단기 HANDY CUTTER-340</h3>
                <p>오차없이 한번에 쉽고 정확히 재단! HANDY CUTTER-340</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>A4 사이즈 20매 재단</li>
                    <li>강력한 반달형 칼날</li>
                    <li>손보호를 위한 투명 안전 누름판</li>
                    <li>정밀한 재단 재단판 눈금자</li>
                    <li>안전 고리로 안전한 보관</li>
                    <li>미끄럼 방지 받침대</li>
                </ul>
            `,
            spec: {
                '모델명': 'HANDY CUTTER 340 II',
                '칼날 방식': '반달형 칼날',
                '최대 재단 매수': '20매 (75g 기준)',
                '제품 크기': '263 x 506 x 70mm',
                '재단 방식': '작두식 재단',
                '재단 규격': 'A4 이하 용지 (297mm)',
                '최대 재단 폭': '304mm',
                '제품 무게': '1kg'
            },
            reviewList: [
                {
                    id: 1,
                    author: '정우진',
                    rating: 5,
                    date: '2024.01.12',
                    content: '성능 아주좋아요 가성비 최고네요!!.',
                    helpful: 345,
                    verified: true
                },
                {
                    id: 2,
                    author: '한미영',
                    rating: 5,
                    date: '2024.01.10',
                    content: '작두날 살벌하게 잘 갈려있네요 안전장치도 꼼꼼하고 좋아요^^.',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 3,
                    author: '강민수',
                    rating: 4,
                    date: '2024.01.08',
                    content: '생각보다 잘 절사 되네요 아무리 안전해도 칼은 칼이라 조심해야해요 가격 대비 괜찮아요~~~',
                    helpful: 198,
                    verified: true
                }
            ]
        },
        {
            id: 8,
            title: 'EF-400 (지문+비밀번호) 지문인식 출퇴근기록기',
            price: 132000,
            salePrice: 86900,
            discount: 34,
            rating: 4.4,
            reviews: 345,
            image: 'https://www.hd2.co.kr/web/product/big/202510/5cca319bac0fa67c4cf9cd7c14a99422.jpg',
            images: [
                'https://www.hd2.co.kr/web/product/small/202510/4c2503c3e9d2f935fbd7768c17672c29.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/c37fd9518fa86c020a5a213ebe4fed9f.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/3d21d997c193690445ca560068f2584a.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/d0370541b6e1d9847771fab0f0b72c3c.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/102e921dc154c750e51734b4b871b7b7.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>근태관리기 EF-400</h3>
                <p>지문인식 +비밀번호 설정으로 편리하게 사용! 한국 기업 맞춤형 근태관리기 EF-400.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>근태 프로그램 무상 지원</li>
                    <li>사용 인원 1,000명</li>
                    <li>USB 사용 가능</li>
                    <li>음성지원 / 지문인식</li>
                    <li>비밀번호 입력</li>
                    <li>한글 지원</li>
                </ul>
            `,
            spec: {
                '제품모델명': 'EF-400',
                '인식방법': '지문 / 비밀번호',
                '사용자수': '1,000명',
                '저장로그': '10만 건',
                '제품크기': '173.5 X 124.5 X 33mm',
                '무게': '약 0.32kg',
                '사용온도': '-10°C ~ 60°C',
                '전원/소비전력': 'DC12V, 1A'
            },
            reviewList: [
                {
                    id: 1,
                    author: '박준호',
                    rating: 4,
                    date: '2024.01.11',
                    content: '잘사용하겠습니다 감사합니더.',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '이수진',
                    rating: 4,
                    date: '2024.01.09',
                    content: '배송 빨라요, 설정하는데 어려움이 있었는데, 잘 사용 할게요~',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 3,
                    author: '최영수',
                    rating: 5,
                    date: '2024.01.07',
                    content: '설치도 등록도 사용하기 쉬워 좋아요.',
                    helpful: 156,
                    verified: true
                }
            ]
        }
    ],
    // 신상품 목록
    new: [
        {
            id: 9,
            title: '전자 순찰시계 EP-002',
            price: 253000,
            salePrice: 99000,
            discount: 61,
            rating: 4.5,
            reviews: 567,
            image: 'https://www.hd2.co.kr/web/product/big/202510/cf6203384300e3299a6f369c5b30ec54.jpg',
            images: [
                'https://www.hd2.co.kr/web/product/small/202510/9497f1c821905a86c6cc8fab4c5e069c.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/5b42fefb38f2291efa4fb1d89ae127e6.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/700c4c37bcb1be3293b754c3468fbb6a.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/a5c30712ab2eae2c9ccc3226cc1f8a8e.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/747411e76f08ae5b7f47d646dafa0fc5.jpg'
            ],
            badge: 'sale',
            badgeText: '61%',
            description: `
                <h3>전자순찰시스템 EP-002</h3>
                <p>플래시기능으로 저녁에도 안전하게! 전자순찰시스템 EP-002.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>부저음/진동, LED 알림기능</li>
                    <li>플래시 기능</li>
                    <li>대용량 사건저장, USB 통신방식</li>
                    <li>강력한 방수처리</li>
                </ul>
            `,
            spec: {
                '제품명': 'EP-002',
                '인식 방식': '자동센서 인식형',
                '저장 공간': '최대 60,000건 사건기록 저장',
                '지속성': '최대 30,000번 인식가능',
                '제품 크기': '31 x 31 x 169mm'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김민수',
                    rating: 5,
                    date: '2024.01.10',
                    content: '가격도 착하고, 업무 관리하기 좋은 순찰 기계입니다.',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 2,
                    author: '이지은',
                    rating: 4,
                    date: '2024.01.08',
                    content: '순찰시스템이 망가져서 새로 구입하눈데 현대오피스 믿고 구입했어요, 프로그램도 사용하기 편했어요.',
                    helpful: 134,
                    verified: true
                }
            ]
        },
        {
            id: 10,
            title: '양면 자석 화이트보드 + 이동식스탠드 세트',
            price: 105000,
            salePrice: 75900,
            discount: 28,
            rating: 4.6,
            reviews: 234,
            image: 'https://www.hd2.co.kr/web/product/big/202508/3dbaa1d1c3f42176ddc6a05a414c0f76.jpg',
            images: [
                'https://www.hd2.co.kr/web/product/small/202508/05c4fad270d8121a01d2b643e83a2bbb.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202508/07e97f3ac638d3bcb8f4ccb1978e9aa9.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202508/034ce1ef218fe92994f82be35698e34a.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202508/ea2455990ef44558bb4a92dfef9888dc.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202508/381041135f028e39e317c0e4356d76c0.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>양면 자석 화이트보드 + 이동식스탠드 세트</h3>
                <p>흔들림 없는 이동식 스탠드와 양면 활용으로 편리한 사용</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>양면 자석 부착 가능</li>
                    <li>부드러운 필기감</li>
                    <li>이동식 스탠드</li>
                    <li>탁월한 지움성</li>
                    <li>강력한 내구성</li>
                    <li>상·하 높이 조절</li>
                </ul>
            `,
            spec: {
                '스탠드 포함 사이즈': '40 X 520 X 1,145mm / 1,240 X 520 X 1,240mm / 1,540 X 520 X 1,240mm',
                '소재': '보드판(철) / 테두리(알루미늄) / 플라스틱',
                '무게': '7.7kg / 10.6kg / 13.5kg',
                '기본 구성품': '보드 마카(4개), 자석 보드 지우개(1개), 자석(3개)'
            },
            reviewList: [
                {
                    id: 1,
                    author: '정수진',
                    rating: 5,
                    date: '2024.01.09',
                    content: '사용하기 편리해요~~~~~~~',
                    helpful: 167,
                    verified: true
                },
                {
                    id: 2,
                    author: '박영호',
                    rating: 4,
                    date: '2024.01.07',
                    content: '사무실에서 화이트 보드가 필요하다고 하여 구매했어요~',
                    helpful: 123,
                    verified: true
                }
            ]
        },
        {
            id: 11,
            title: 'A3 코팅기 PL-7906',
            price: 396000,
            salePrice: 299000,
            discount: 24,
            rating: 4.9,
            reviews: 1234,
            image: 'https://www.hd2.co.kr/web/product/big/202512/1a1b767d5bbc1fb3940e35858e65def8.jpg',
            images: [
                'https://www.hd2.co.kr/web/product/small/202512/6e654cecd712cc8e0eecfb9b7a3c835d.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202512/e7cdac6bb46844ca7121e8caa30ecdbd.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202512/80d7ccf031784efd7f97d0acbba000b0.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202512/76f1d9ad24b4458c8c3fc4a1374ce980.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202512/f89275729e1e0074d50b6bb127c961c8.jpg'
            ],
            badge: 'sale',
            badgeText: '24%',
            description: `
                <h3>AUTO SENSE 안티잼 A3 코팅기 PL-7906</h3>
                <p>변형 걱정 없는 프리미엄 강화 유리 6롤러 압착과 자동 속도 조절로 완벽한 코팅!</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>빠른 코팅 속도</li>
                    <li>최대 코팅 두께 250mic</li>
                    <li>문서 두께 자동 감지</li>
                    <li>특수 설계 안티잼기능</li>
                    <li>6롤러 가열 방식</li>
                    <li>30분 미사용 시 자동 절전</li>
                </ul>
            `,
            spec: {
                '모델명': 'PL-7906',
                '예열 시간': '60초',
                '최대 투입폭': '330mm (A3)',
                '코팅 속도': '최대 1,000mm/분',
                '코팅 두께': '80 ~ 250mic',
                '전원': '220V / 60Hz',
                '제품 크기': '525 X 209 X 110mm',
                '무게': '7kg'
            },
            reviewList: [
                {
                    id: 1,
                    author: '김태현',
                    rating: 5,
                    date: '2024.01.13',
                    content: '잘됩니다. 간지남ㅎ',
                    helpful: 456,
                    verified: true
                },
                {
                    id: 2,
                    author: '이서연',
                    rating: 5,
                    date: '2024.01.11',
                    content: '슬림 하고 좋아요~',
                    helpful: 389,
                    verified: true
                },
                {
                    id: 3,
                    author: '박준영',
                    rating: 5,
                    date: '2024.01.09',
                    content: '코팅도 잘 되고 디자인도 깔끔하니 괜찮네요.',
                    helpful: 312,
                    verified: true
                },
                {
                    id: 4,
                    author: '최미라',
                    rating: 4,
                    date: '2024.01.07',
                    content: '배송 빠르고 안전하게 잘 왔고 제품 퀄러티야 말 할것없이 좋네요 ^^',
                    helpful: 234,
                    verified: true
                }
            ]
        },
        {
            id: 12,
            title: '[PK-720CD] 소형 가정용 저소음 문서세단기',
            price: 140000,
            salePrice: 99000,
            discount: 29,
            rating: 4.7,
            reviews: 456,
            image: 'https://www.hd2.co.kr/web/product/big/202501/006d70f550c0f0cb4b36e636596c9c0a.jpg',
            images: [
                'https://www.hd2.co.kr/web/product/small/202501/9301a071bb098f9aa16eded7afea646c.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202507/bf2e6514bf4e69f83383c0417f761f52.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202507/95f98a24cd9e125061aecae4064dfb9c.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202507/fafa8f700f65caf3d03e313ec7752a9d.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202507/f6a31d6a5f5a5ddacd5fbd18ad591936.jpg'
            ],
            badge: 'sale',
            badgeText: '29%',
            description: `
                <h3>슬림형 문서세단기</h3>
                <p>세단 소음 걱정 없는 극강의 조용함 PK-720CD</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>저소음 세단</li>
                    <li>보안1등급 세단 [2 X 10mm]</li>
                    <li>10L 세로형 서랍식 파지함</li>
                    <li>CD / 카드 스테이플러 심 세단 가능</li>
                    <li>1회 최대 6매 세단</li>
                </ul>
            `,
            spec: {
                '모델명': 'NEW PK-720CD',
                '세단 가능': '종이 / CD / 카드 / 스테이플러심',
                '세단 매수': '1회 6매',
                '연속 세단': '10분 동작 / 30분 휴지',
                '제품 크기': '200(W) X 325(D) X 370(H)mm',
                '무게': '약 5.4kg',
                '전원 / 소비전력': '220V / 60Hz, 2.5A'
            },
            reviewList: [
                {
                    id: 1,
                    author: '장민호',
                    rating: 5,
                    date: '2024.01.12',
                    content: '책상아래 두고 잘사용하고 있어요~ 가정옹이나 작은 사무실 좋을거 같아요 강력추천 합니다.',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 2,
                    author: '윤지혜',
                    rating: 5,
                    date: '2024.01.10',
                    content: '배송 빠르네요! 저소음이라 사무실에서 조용하게 쓸 수 있어 맘에 들어요.',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 3,
                    author: '이동욱',
                    rating: 4,
                    date: '2024.01.08',
                    content: '소음이 확실히 다른 문서세단기 제품보다 적어요, 제품도 깔끔하고 추천합니다. 굿',
                    helpful: 189,
                    verified: true
                }
            ]
        },
        {
            id: 18,
            title: '열제본기 TD-9800',
            price: 396000,
            salePrice: 297000,
            discount: 25,
            rating: 4.6,
            reviews: 289,
            image: 'https://www.hd2.co.kr/web/product/big/202602/bd048e160ebe5cd942eb147c232eaccf.jpg',
            images: [
                'https://www.hd2.co.kr/web/product/small/202602/f389510407ec9be0d3b3e7e35be5fec0.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202602/49b63b545e0c18fb24988876ff9561e4.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202602/f3adbf29026ee1b1aec6d62146d6dc90.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202602/b6236dff1e48b883f6820bd739d63061.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202602/7938483cb65d23afe448320872aec281.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>대용량 A4 열제본기 TD-9800</h3>
                <p>튼튼한 스틸 케이스와 넉넉한 대용량 제본.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>최대 980매 제본</li>
                    <li>두께에 따른 시간 설정</li>
                    <li>압착 가이드 장착</li>
                    <li>여러 권 동시 제본</li>
                    <li>알림음 & 시간 표시창</li>
                    <li>예열 시간 1분 내외</li>
                    <li>자동 절전 10분</li>
                </ul>
            `,
            spec: {
                '모델명': 'TD-9800',
                '제본 방식': '열 제본',
                '제본 규격': 'A4 이하 용지 (가로사이즈)',
                '예열 시간': '1분 내외',
                '제본 매수': '최대 980매 (98mm)',
                '제본 시간': '60/90/120초',
                '온도 설정': '고온 145 ~ 160℃ / 저온 110 ~ 135℃',
                '제품 무게': '5kg',
                '전원/소비전력': '220V, 60Hz / 1A',
                '제품 크기': '400 x 250 x 230mm',
                '색상': '그레이',
            },
            reviewList: [
                {
                    id: 1,
                    author: '김수진',
                    rating: 5,
                    date: '2024.01.11',
                    content: '회사 직원들 교육용 교재 만들려고 샀어요 안전해 보이고 좋네요 금액도 비싸지 않고',
                    helpful: 198,
                    verified: true
                },
                {
                    id: 2,
                    author: '박영수',
                    rating: 4,
                    date: '2024.01.09',
                    content: '예열없다고해서 추가 구매했어요 사용하기 편해요',
                    helpful: 156,
                    verified: true
                },
                {
                    id: 3,
                    author: '이민지',
                    rating: 5,
                    date: '2024.01.07',
                    content: '생각보다 너무 좋아서 제본지 여러종류 사가지고 이용중이에요 ㅎㅎ 잘 쓰겠습니다~',
                    helpful: 134,
                    verified: true
                }
            ]
        },
        {
            id: 19,
            title: 'ANAC 자동 먼지 비움 청소기 ANA-BEUM25',
            price: 399000,
            salePrice: 299000,
            discount: 25,
            rating: 4.6,
            reviews: 567,
            image: 'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/05/20/S6293280/_0_600.jpg',
            images: [
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/05/20/S6293280/_0_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/05/20/S6293280/_1_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/05/20/S6293280/_2_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/05/20/S6293280/_3_600.jpg',
                'https://www.etlandmall.co.kr/nas/cdn/attach/product/2025/05/20/S6293280/_4_600.jpg'
            ],
            badge: 'new',
            badgeText: 'NEW',
            description: `
                <h3>자동으로 먼지를 비워주는 스마트 청소기</h3>
                <p>ANAC 자동 먼지 비움 청소기 ANA-BEUM25는 청소 후 자동으로 먼지통을 비워주는 혁신적인 로봇 청소기입니다. 더 이상 먼지통을 직접 비울 필요 없이 편리하게 사용할 수 있습니다.</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>자동 먼지 비움 기능으로 청소 후 자동으로 먼지통 비우기</li>
                    <li>강력한 흡입력으로 깊은 청소</li>
                    <li>스마트 매핑 기능으로 효율적인 청소 경로</li>
                    <li>앱 연동으로 원격 제어 및 스케줄 설정</li>
                    <li>자동 충전 기능으로 연속 청소 가능</li>
                    <li>카펫 감지 기능으로 바닥재에 맞춘 청소</li>
                    <li>저소음 설계로 조용한 청소</li>
                </ul>
                <h4>포함 구성품</h4>
                <ul>
                    <li>ANAC 자동 먼지 비움 청소기 본체</li>
                    <li>자동 충전 스테이션</li>
                    <li>먼지 비움 스테이션</li>
                    <li>예비 필터</li>
                    <li>사이드 브러시</li>
                    <li>사용 설명서</li>
                </ul>
            `,
            spec: {
                '모델명': 'ANA-BEUM25',
                '흡입력': '최대 2500Pa',
                '배터리': '최대 120분 연속 청소',
                '먼지통 용량': '0.6L',
                '청소 모드': '자동, 스팟, 가장자리, 스케줄',
                '연결': 'Wi-Fi, 앱 연동',
                '센서': 'LDS 레이저 센서, 충돌 방지 센서',
                '소음': '약 65dB',
                '크기': '350mm x 350mm x 100mm',
                '무게': '약 3.5kg',
                '색상': '화이트, 블랙'
            },
            reviewList: [
                {
                    id: 1,
                    author: '이민지',
                    rating: 5,
                    date: '2024.01.10',
                    content: '자동 먼지 비움 기능이 정말 편해요! 한 달에 한 번만 비우면 되서 정말 편리합니다. 청소력도 강력하고 만족스러워요.',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '정태영',
                    rating: 4,
                    date: '2024.01.08',
                    content: '스마트 매핑 기능이 정말 좋아요. 집 구조를 기억해서 효율적으로 청소하네요. 다만 가격이 조금 부담스럽긴 해요.',
                    helpful: 189,
                    verified: true
                },
                {
                    id: 3,
                    author: '김수진',
                    rating: 5,
                    date: '2024.01.06',
                    content: '앱으로 원격 제어할 수 있어서 외출 중에도 청소할 수 있어요. 자동 충전도 잘 되고, 배터리도 오래 가네요.',
                    helpful: 156,
                    verified: true
                },
                {
                    id: 4,
                    author: '박준호',
                    rating: 4,
                    date: '2024.01.04',
                    content: '반려동물 털도 잘 빨아들이네요! 카펫 감지 기능도 잘 작동하고, 소음도 생각보다 조용해요.',
                    helpful: 134,
                    verified: true
                }
            ]
        }
    ],
    // 특가 상품 목록
    sale: [
        {
            id: 13,
            title: '2공천공기 HDP-100',
            price: 121000,
            salePrice: 92500,
            discount: 24,
            rating: 4.7,
            reviews: 2345,
            image: 'https://www.hd2.co.kr/web/product/big/202510/99d459606526d39e4a0a2cbdbc29fe1f.jpg',
            images: [
                'https://www.hd2.co.kr/web/product/small/202510/256dd02f501013ad98884019888e0ee7.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/d3d3d643660cd8961650ec453735e4f7.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/ad6f77becf981db44e7b992ecf95fb07.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/6dd868e7e87038003f2a6e536d539a63.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/506e6798ab832113384b2f49248723d3.jpg'
            ],
            badge: 'sale',
            badgeText: '24%',
            description: `
                <h3>HDP-100</h3>
                <p>최대 100매를 힘들이지 않고 손쉽게! 서류철 정리인 탁월한 2공천공기!</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>1회 100매 천공</li>
                    <li>A4~A6용지까지</li>
                    <li>간편한 사용법</li>
                    <li>분리형 천공물함</li>
                    <li>40% 힘절약</li>
                </ul>
            `,
            spec: {
                '제품모델명': 'HDP-100',
                '천공방식': '2공 수동천공',
                '천공깊이': '9mm',
                '최대 천공매수': '1회 100매',
                '제품크기': '140 X 243 X 135mm',
                '제품무게': '1.98kg'
            },
            reviewList: [
                {
                    id: 1,
                    author: '홍길동',
                    rating: 5,
                    date: '2024.01.14',
                    content: '사무실에서 쓰려고 주문했는데 잘 뚫어지고 편리해서 좋아요.',
                    helpful: 567,
                    verified: true
                },
                {
                    id: 2,
                    author: '김영희',
                    rating: 5,
                    date: '2024.01.12',
                    content: '다른 브랜드 상품 쓰다 금방 고장 나서 주문했습니다 고장 안나고 오래오래 사용했으면 좋겠어요 !',
                    helpful: 489,
                    verified: true
                },
                {
                    id: 3,
                    author: '이철수',
                    rating: 4,
                    date: '2024.01.10',
                    content: '힘안들어가고 너무 좋네요 ㅠ',
                    helpful: 345,
                    verified: true
                }
            ]
        },
        {
            id: 14,
            title: '동전분류기 HCS-1200',
            price: 320000,
            salePrice: 275000,
            discount: 14,
            rating: 4.8,
            reviews: 789,
            image: 'https://www.hd2.co.kr/web/product/big/202510/153185284017639409a394e305d3ba49.jpg',
            images: [
                'https://www.hd2.co.kr/web/product/small/202510/9fbc984e1a27b94a7e5c8de5461d9451.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/e87ec08bacf89cd860a91039f3dfe5c1.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/0239c9580b657d92f4e62a56ccaceca5.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/355a8bbfe272f403d1470d9ded643a8d.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/8ba371a7fb5601ba7b83ba1e3404973e.jpg'
            ],
            badge: 'sale',
            badgeText: '14%',
            description: `
                <h3>신개념 동전분류기 HCS-1200</h3>
                <p>넉넉한 호퍼용량과 신속정확한 분류&계수가능! 권종별 분리형 스태커로 편리한 사용</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>넉넉한 호퍼용량</li>
                    <li>분리형 스태커</li>
                    <li>롤러 탑재</li>
                    <li>신권 10원 주화 계수</li>
                    <li>손쉬운 조작법</li>
                </ul>
            `,
            spec: {
                '품명': '동전계수기',
                '호퍼용량': '300~500개 (권종별로 다름)',
                '계수속도': '최대 330개/분',
                '처리가능주화': '5종 (신권 10원 포함)',
                '계수표시': '최대 9,999,999 (7자리)',
                '소비전력': '220V / 60Hz, 170mA',
                '제품크기': '355 X 330 X 266mm',
                '제품무게': '4.5kg',
                'KC인증번호': 'R-R-HOF-HCS-1200 (국립전파연구원)'
            },
            reviewList: [
                {
                    id: 1,
                    author: '최민수',
                    rating: 5,
                    date: '2024.01.13',
                    content: '가격대비 쓸만한거 같아요 오래 쓰다보면 동전분류가 몇개씩은 잘 안되긴하지만 괜찮네요.',
                    helpful: 345,
                    verified: true
                },
                {
                    id: 2,
                    author: '박지영',
                    rating: 5,
                    date: '2024.01.11',
                    content: '이제 동전을 편하고 빠르게 셀 수 있어요 잘 받았습니다.',
                    helpful: 278,
                    verified: true
                },
                {
                    id: 3,
                    author: '이준호',
                    rating: 4,
                    date: '2024.01.09',
                    content: '동전 세다가 죽는줄알았는데 숨통 트이네요.. 감사합니다ㅎ',
                    helpful: 198,
                    verified: true
                }
            ]
        },
        {
            id: 15,
            title: '코너라운더 HR-303',
            price: 15400,
            salePrice: 5700,
            discount: 63,
            rating: 4.6,
            reviews: 345,
            image: 'https://www.hd2.co.kr/web/product/big/202510/6d54aa856d01455ecbd89d779b2025e3.jpg',
            images: [
                'https://www.hd2.co.kr/web/product/small/202510/f13b30df695578c222e35d257e3579ea.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/6343c7edc7d3761985621a4b9219045e.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/76e11303c04d43e29a0babd328b3e59e.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/05d2641abdf3b03274f3fbacb85917a4.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202510/64e3f5cbf1e577a90fd17fcf7d5770cc.jpg'
            ],
            badge: 'sale',
            badgeText: '63%',
            description: `
                <h3>3 in 1 코너라운더</h3>
                <p>다기능 라운드 커팅으로 뽀족한 모서리를 둥글게 정리</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>3가지 곡률 라운드 커팅</li>
                    <li>쉽고 간단한 원터치 사용</li>
                    <li>안전한 절단 방식</li>
                    <li>작고 귀여운 사이즈</li>
                    <li>비우기 편한 원터치 파지함</li>
                </ul>
            `,
            spec: {
                '모델명': 'HR-303',
                '커팅 방식': '원터치 커팅',
                '커팅 매수': '5장 내외 (75g 기준)',
                '커팅 규격': '4, 7, 10mm',
                '제품 크기': '87 X 71 X 35mm',
                '제품 색상': '그레이, 옐로우, 핑크',
            },
            reviewList: [
                {
                    id: 1,
                    author: '김태수',
                    rating: 5,
                    date: '2024.01.12',
                    content: '총알 배송에 감사드립니다. 명절인데도 정말 빠르게 배송 해 주셨어요.',
                    helpful: 234,
                    verified: true
                },
                {
                    id: 2,
                    author: '이미라',
                    rating: 4,
                    date: '2024.01.10',
                    content: '받자마자 바로 사용했습니다. 코팅 잘 되고 사용허기 쉬웠습니다.',
                    helpful: 189,
                    verified: true
                }
            ]
        },
        {
            id: 16,
            title: 'A3코팅기 PL-540PRO',
            price: 338000,
            salePrice: 220000,
            discount: 35,
            rating: 4.8,
            reviews: 1234,
            image: 'https://www.hd2.co.kr/web/product/big/202601/8305c9c40ee5536fb8aa86d451b39d43.jpg',
            images: [
                'https://www.hd2.co.kr/web/product/small/202601/7bd370f6e62500ca3d1d3c35d76e6e38.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202601/51d971a57ce656c8e6236a97545e94f3.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202601/78306c80fc4b91f08d7427d8ac44d61f.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202601/390bc0ab522a6160ff4547d05fa957b2.jpg',
                'https://www.hd2.co.kr/web/product/extra/small/202601/016d8b47480961927385ada0dbc6bab9.jpg'
            ],
            badge: 'sale',
            badgeText: '35%',
            description: `
                <h3>견고한 스틸 프레임 A3 코팅기</h3>
                <p>정밀한 온도 조절과 4롤러 구조로 두꺼운 용지도 빠르고 깔끔하게 코팅 NEW PL-540pro</p>
                <h4>주요 특징</h4>
                <ul>
                    <li>최대 A3 사이즈 코팅</li>
                    <li>최대 코팅 두께 350mic</li>
                    <li>튼튼한 스틸 케이스</li>
                    <li>600mm/분 빠른 코팅 속도</li>
                    <li>4롤러 / 핫롤러 가열 방식</li>
                    <li>코팅 온도 자동 세팅</li>
                </ul>
            `,
            spec: {
                '모델명': 'NEW PL-540PRO',
                '예열 시간': '2분',
                '코팅 속도': '최대 600mm/분',
                '코팅 두께': '80 ~ 350mic',
                '롤러 수': '4롤러',
                '무게': '8.2kg',
                '제품 크기': '490 X 206 X 112mm'
            },
            reviewList: [
                {
                    id: 1,
                    author: '정수진',
                    rating: 5,
                    date: '2024.01.13',
                    content: '현대오피스 직원의 추천으로 구입하게 된 제품이예요 만족합니다.',
                    helpful: 456,
                    verified: true
                },
                {
                    id: 2,
                    author: '박영호',
                    rating: 5,
                    date: '2024.01.11',
                    content: '사용자들이 간단하게 조작 할 수 있아서 좋아요.',
                    helpful: 389,
                    verified: true
                },
                {
                    id: 3,
                    author: '이미영',
                    rating: 5,
                    date: '2024.01.09',
                    content: '사무실에 코팅기가 오래되어서 교체했는데 직원이 만족해 합니다. 사용하기도 편리하고 복잡하지 않아서 좋습니다.',
                    helpful: 312,
                    verified: true
                },
                {
                    id: 4,
                    author: '최태현',
                    rating: 4,
                    date: '2024.01.07',
                    content: '회사에서 사용하고자 구매했습니다. 좀 무겁지만 예열시간이 짧아 좋아요.',
                    helpful: 234,
                    verified: true
                }
            ]
        }
    ]
};

// ============================================
// 상품 데이터 조회 함수
// ============================================

// 모든 상품을 가져오는 함수
function getAllProducts() {
    return [...productsData.best, ...productsData.new, ...productsData.sale];
}

// 상품 ID로 특정 상품을 찾는 함수
function findProductById(productId) {
    return getAllProducts().find(p => p.id === productId);
}

// 전역에서 접근 가능하도록 window 객체에 노출
window.productsData = productsData;
window.findProductById = findProductById;
window.getAllProducts = getAllProducts;
