export const dummy = {
  location: {
    sido: '경기',
    sigungu: '남양주시',
    third: '일패동',
  },
  corpName: '보로노이',
  corpType: '유한회사',
  corpItems: [
    {
      content: '주식회사',
      image: 'https://deungi24.com/img/illu_1.png',
      expertName: '등기24',
      expertCharge: '등기24 변호사',
      expertContent: `
        <p class="tooltip-title">
        <span style="color: #3850a1">일반적인 법인</span>으로 <span style="color: #3850a1">외부 투자</span>와 <span
          style="color: #3850a1">절세</span>에 유리합니다.
        </p>
        <p class="tooltip-content">한국에서 가장 흔한 법인 유형입니다. 특수 법인이 아니면 선택하세요.<br>공개적인 투자 유치나, 상장까지도 할 수
          있습니다.</p>
      `
    },
    {
      content: '유한회사',
      image: 'https://deungi24.com/img/illu_2.png',
      expertName: '등기24',
      expertCharge: '등기24 변호사',
      expertContent: `
      <p class="tooltip-title">
        <span style="color: #3850a1">기업 재무 정보</span>를 외부에 <span style="color: #3850a1">공개하기 싫다면</span> 선택하세요.
        </p>
        <p class="tooltip-content">외부 투자나 상장 계획이 없다면, 기업 정보를 공개 할 의무가 없는 유한회사 법인이 유리합니다.</p>
      `
    },
    {
      content: '농/어업 법인',
      image: 'https://deungi24.com/img/illu_3.png',
      expertName: '등기24',
      expertCharge: '등기24 변호사',
      expertContent: `
        <p class="tooltip-title">
        <span style="color: #3850a1">주주 전원</span>이 <span style="color: #3850a1">농업인</span>이라면 선택하세요.
        </p>
        <p class="tooltip-content">농/어업 법인은 각종 세금 감면 혜택과 브랜드 경쟁력을 가질 수 있습니다. 단, 주주 전원의 농업인 확인서가 있어야 설립
          가능 합니다.</p>
      `
    },
    {
      content: '사회적 기업, 협동조합',
      image: 'https://deungi24.com/img/illu_4.png',
      expertName: '등기24',
      expertCharge: '등기24 변호사',
      expertContent: `
        <p class="tooltip-title">
        <span style="color: #3850a1">비영리 회사</span>, <span style="color: #3850a1">협동 조합</span>을 만들고 싶다면 선택하세요.
        </p>
        <p class="tooltip-content">각종 세금 감면 혜택이나 정부 지원을 받을 수 있습니다. 조건에 따라 일정 기준의 영리활동도 가능합니다.</p>
      `
    },
  ],
  capital: 20000000,
  executives: [
    {
      name: '테스트감사',
      charge: '감사',
      underage: true,
      foreigner: false,
    },
    {
      name: '테스트법인',
      charge: '법인',
      underage: false,
      foreigner: true,
    },
    {
      name: '김개인',
      charge: '개인',
      underage: true,
      foreigner: true,
    }
  ],
  billItems: [
    {
      costName: '설립공과금',
      totalCost: '155,000',
      details: [
        {
          costName: '법인 설립 공과금',
          cost: '425,000',
          sale: false,
        },
        {
          costName: '과밀지역 외 설립 공과금 절약',
          cost: '270,000',
          sale: true,
        }
      ],
    },
    {
      costName: '수수료',
      totalCost: '979,000',
      details: [
        {
          costName: '서류등기 수수료',
          cost: '700,000',
          sale: false,
        },
        {
          costName: '등기24 8월 할인',
          cost: '321,000',
          sale: true,
        },
        {
          costName: '농어업법인 설립 추가 수수료',
          cost: '200,000',
          sale: false,
        },
        {
          costName: '미성년자 추가 수수료',
          cost: '200,000',
          sale: false,
        },
        {
          costName: '외국인 주주 추가 수수료',
          cost: '200,000',
          sale: false,
        },
      ],
    },
    {
      costName: 'VAT',
      totalCost: '97,900'
    },
    {
      costName: '합계',
      totalCost: '4,790,870',
      sale: {
        costName: '등기24 할인',
        cost: '2,569,650'
      }
    }
  ],
  service: '전자등기',
  serviceGroup: [
    {
      duration: '5일',
      advantage: '방문없이 빠르고 편리한',
      method: '전자 등기',
      image: {
        checked: 'https://deungi24.com/img/ico_list9_on.png',
        unchecked: 'https://deungi24.com/img/ico_list9.png'
      },
      cost: '179,000'
    },
    {
      duration: '9일',
      advantage: '서류를 등기로 보내 주세요',
      method: '서류 등기',
      image: {
        checked: 'https://deungi24.com/img/ico_list10_on.png',
        unchecked: 'https://deungi24.com/img/ico_list10.png'
      },
      cost: '379,000'
    },
  ],
  benefitItems:[
    {
      name: 'example1',
      image: 'https://deungi24.com/img/gift3_1.png',
      title: '절세에 유리한 정관 제작',
      cost: '220,000원',
      sale: true,
      saleCost: '0원'
    },
    {
      name: 'example2',
      image: 'https://deungi24.com/img/gift4.png',
      title: '변호사 직접 검수',
      cost: '220,000원',
      sale: true,
      saleCost: '0원'
    },
    {
      name: 'example3',
      image: 'https://deungi24.com/img/gift1.png',
      title: '법인서류 및 보관 바인더',
      cost: '220,000원',
      sale: true,
      saleCost: '0원'
    },
    {
      name: 'example4',
      image: 'https://deungi24.com/img/gift2.png',
      title: '가죽 인감 도장',
      cost: '220,000원',
      sale: true,
      saleCost: '0원'
    }
  ],
  
}

export default async function Data<T>(key: keyof typeof dummy) {
  return await new Promise((resolve) => {
      setTimeout(() => resolve(dummy[key] as T), 2000)}) as T
}