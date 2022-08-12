import $ from 'jquery';

$(document).ready(function(){
    //로컬스토리지 확인
    checkLocalStorage();
    // 다음버튼 클릭시
    $('#nextBtn').on('click',function(){
        if($('#sigungu').val() == '' || typeof $('#sigungu').val() == 'undefined' || $('#sigungu').val() == null) {
            $('#ly-1-1').show();
        } else {
            saveLocalStorage();
            $common.goPage('/apply/four');
        }
    });

    if($('#sido').val() == '서울' || $('#sido').val() == '경기' || $('#sido').val() == '인천') {
        $("img").maphilight({
            fill:true,
            fillColor:'d54d4d',
            strokeColor:'d54d4d',
            fillOpacity: 0.2,
            strokeOpacity: 1,
            strokeWidth: 4,
            fade:true
        });
    } else {
        $("img").maphilight({
            fill:true,
            fillColor:'3a52b4',
            fillOpacity: 0.2,
            strokeColor:'3a52b4',
            strokeOpacity: 1,
            strokeWidth: 4,
            fade:true
        });
    }

    $('body').on('change', '#thirdCity', function() {
        const sigungu = $('#sigungu').val();
        var value = $(this).val();
        if (value === '그 외 지역') {
            $("img").maphilight({
                fill:true,
                fillColor:'d54d4d',
                strokeColor:'d54d4d',
                fillOpacity: 0.2,
                strokeOpacity: 1,
                strokeWidth: 4,
                fade:true
            });
            localStorage.setItem('overpopulated', true);
        } else {
            if (sigungu === '성남시' || sigungu === '수원시' || value === '반월특수지역에서 해제된 지역') {
                $("img").maphilight({
                    fill:true,
                    fillColor:'d54d4d',
                    strokeColor:'d54d4d',
                    fillOpacity: 0.2,
                    strokeOpacity: 1,
                    strokeWidth: 4,
                    fade:true
                });
                localStorage.setItem('overpopulated', true);
            } else {
                $("img").maphilight({
                    fill:true,
                    fillColor:'3a52b4',
                    fillOpacity: 0.2,
                    strokeColor:'3a52b4',
                    strokeOpacity: 1,
                    strokeWidth: 4,
                    fade:true
                });
                localStorage.setItem('overpopulated', false);
            }
        }
        saveLocalStorage();
    });

    $('map area').click(function(e) {
        e.preventDefault();
        var clickedArea = $(this);
        $('map area').each(function() {
            hData = $(this).data('maphilight') || {};
            hData.alwaysOn = $(this).is(clickedArea);
            $(this).data('maphilight', hData ).trigger('alwaysOn.maphilight');
        });
    });

    // 팝업창 종료 클릭이벤트
    $('.btn-close-layer').on('click',function(e){
        var $this = $(this);
        var targetLy = $this.attr('data-layer');
        closeLayerPop(targetLy);
        e.preventDefault();
    })

    // add things

    // nav swipe
    var navInner = document.getElementById("navInner");

    var hammertime = new Hammer(navInner);
    var x = 0;
    hammertime.on('pan', function (ev) {
        if (ev.additionalEvent === 'panleft') {
            x = x - 10;
        }
        if (ev.additionalEvent === 'panright') {
            x =  x + 10;
        }
        $(navInner).css('marginLeft', x + 'px');
    })
});

var codeTypeArr = [];
var codeArr = [];
var codeNameArr = [];

codeTypeArr[0] = "강원";
codeArr[0] = "강릉시";
codeNameArr[0] = "강릉시";


codeTypeArr[1] = "강원";
codeArr[1] = "고성군";
codeNameArr[1] = "고성군";


codeTypeArr[2] = "강원";
codeArr[2] = "동해시";
codeNameArr[2] = "동해시";


codeTypeArr[3] = "강원";
codeArr[3] = "삼척시";
codeNameArr[3] = "삼척시";


codeTypeArr[4] = "강원";
codeArr[4] = "속초시";
codeNameArr[4] = "속초시";


codeTypeArr[5] = "강원";
codeArr[5] = "양구군";
codeNameArr[5] = "양구군";


codeTypeArr[6] = "강원";
codeArr[6] = "양양군";
codeNameArr[6] = "양양군";


codeTypeArr[7] = "강원";
codeArr[7] = "영월군";
codeNameArr[7] = "영월군";


codeTypeArr[8] = "강원";
codeArr[8] = "원주시";
codeNameArr[8] = "원주시";


codeTypeArr[9] = "강원";
codeArr[9] = "인제군";
codeNameArr[9] = "인제군";


codeTypeArr[10] = "강원";
codeArr[10] = "정선군";
codeNameArr[10] = "정선군";


codeTypeArr[11] = "강원";
codeArr[11] = "철원군";
codeNameArr[11] = "철원군";


codeTypeArr[12] = "강원";
codeArr[12] = "춘천시";
codeNameArr[12] = "춘천시";


codeTypeArr[13] = "강원";
codeArr[13] = "태백시";
codeNameArr[13] = "태백시";


codeTypeArr[14] = "강원";
codeArr[14] = "평창군";
codeNameArr[14] = "평창군";


codeTypeArr[15] = "강원";
codeArr[15] = "홍천군";
codeNameArr[15] = "홍천군";


codeTypeArr[16] = "강원";
codeArr[16] = "화천군";
codeNameArr[16] = "화천군";


codeTypeArr[17] = "강원";
codeArr[17] = "횡성군";
codeNameArr[17] = "횡성군";


codeTypeArr[18] = "경기";
codeArr[18] = "가평군";
codeNameArr[18] = "가평군";


codeTypeArr[19] = "경기";
codeArr[19] = "고양시";
codeNameArr[19] = "고양시";


codeTypeArr[20] = "경기";
codeArr[20] = "과천시";
codeNameArr[20] = "과천시";


codeTypeArr[21] = "경기";
codeArr[21] = "광명시";
codeNameArr[21] = "광명시";


codeTypeArr[22] = "경기";
codeArr[22] = "광주시";
codeNameArr[22] = "광주시";


codeTypeArr[23] = "경기";
codeArr[23] = "구리시";
codeNameArr[23] = "구리시";


codeTypeArr[24] = "경기";
codeArr[24] = "군포시";
codeNameArr[24] = "군포시";


codeTypeArr[25] = "경기";
codeArr[25] = "김포시";
codeNameArr[25] = "김포시";


codeTypeArr[26] = "경기";
codeArr[26] = "남양주시";
codeNameArr[26] = "남양주시";


codeTypeArr[27] = "경기";
codeArr[27] = "동두천시";
codeNameArr[27] = "동두천시";


codeTypeArr[28] = "경기";
codeArr[28] = "부천시";
codeNameArr[28] = "부천시";


codeTypeArr[29] = "경기";
codeArr[29] = "성남시";
codeNameArr[29] = "성남시";


codeTypeArr[30] = "경기";
codeArr[30] = "수원시";
codeNameArr[30] = "수원시";


codeTypeArr[31] = "경기";
codeArr[31] = "시흥시";
codeNameArr[31] = "시흥시";


codeTypeArr[32] = "경기";
codeArr[32] = "안산시";
codeNameArr[32] = "안산시";


codeTypeArr[33] = "경기";
codeArr[33] = "안성시";
codeNameArr[33] = "안성시";


codeTypeArr[34] = "경기";
codeArr[34] = "안양시";
codeNameArr[34] = "안양시";


codeTypeArr[35] = "경기";
codeArr[35] = "양주시";
codeNameArr[35] = "양주시";


codeTypeArr[36] = "경기";
codeArr[36] = "양평군";
codeNameArr[36] = "양평군";


codeTypeArr[37] = "경기";
codeArr[37] = "여주시";
codeNameArr[37] = "여주시";


codeTypeArr[38] = "경기";
codeArr[38] = "연천군";
codeNameArr[38] = "연천군";


codeTypeArr[39] = "경기";
codeArr[39] = "오산시";
codeNameArr[39] = "오산시";


codeTypeArr[40] = "경기";
codeArr[40] = "용인시";
codeNameArr[40] = "용인시";


codeTypeArr[41] = "경기";
codeArr[41] = "의왕시";
codeNameArr[41] = "의왕시";


codeTypeArr[42] = "경기";
codeArr[42] = "의정부시";
codeNameArr[42] = "의정부시";


codeTypeArr[43] = "경기";
codeArr[43] = "이천시";
codeNameArr[43] = "이천시";


codeTypeArr[44] = "경기";
codeArr[44] = "파주시";
codeNameArr[44] = "파주시";


codeTypeArr[45] = "경기";
codeArr[45] = "평택시";
codeNameArr[45] = "평택시";


codeTypeArr[46] = "경기";
codeArr[46] = "포천시";
codeNameArr[46] = "포천시";


codeTypeArr[47] = "경기";
codeArr[47] = "하남시";
codeNameArr[47] = "하남시";


codeTypeArr[48] = "경기";
codeArr[48] = "화성시";
codeNameArr[48] = "화성시";


codeTypeArr[49] = "경남";
codeArr[49] = "거제시";
codeNameArr[49] = "거제시";


codeTypeArr[50] = "경남";
codeArr[50] = "거창군";
codeNameArr[50] = "거창군";


codeTypeArr[51] = "경남";
codeArr[51] = "고성군";
codeNameArr[51] = "고성군";


codeTypeArr[52] = "경남";
codeArr[52] = "김해시";
codeNameArr[52] = "김해시";


codeTypeArr[53] = "경남";
codeArr[53] = "남해군";
codeNameArr[53] = "남해군";


codeTypeArr[54] = "경남";
codeArr[54] = "밀양시";
codeNameArr[54] = "밀양시";


codeTypeArr[55] = "경남";
codeArr[55] = "사천시";
codeNameArr[55] = "사천시";


codeTypeArr[56] = "경남";
codeArr[56] = "산청군";
codeNameArr[56] = "산청군";


codeTypeArr[57] = "경남";
codeArr[57] = "양산시";
codeNameArr[57] = "양산시";


codeTypeArr[58] = "경남";
codeArr[58] = "의령군";
codeNameArr[58] = "의령군";


codeTypeArr[59] = "경남";
codeArr[59] = "진주시";
codeNameArr[59] = "진주시";


codeTypeArr[60] = "경남";
codeArr[60] = "창녕군";
codeNameArr[60] = "창녕군";


codeTypeArr[61] = "경남";
codeArr[61] = "창원시";
codeNameArr[61] = "창원시";


codeTypeArr[62] = "경남";
codeArr[62] = "통영시";
codeNameArr[62] = "통영시";


codeTypeArr[63] = "경남";
codeArr[63] = "하동군";
codeNameArr[63] = "하동군";


codeTypeArr[64] = "경남";
codeArr[64] = "함안군";
codeNameArr[64] = "함안군";


codeTypeArr[65] = "경남";
codeArr[65] = "함양군";
codeNameArr[65] = "함양군";


codeTypeArr[66] = "경남";
codeArr[66] = "합천군";
codeNameArr[66] = "합천군";


codeTypeArr[67] = "경북";
codeArr[67] = "경산시";
codeNameArr[67] = "경산시";


codeTypeArr[68] = "경북";
codeArr[68] = "경주시";
codeNameArr[68] = "경주시";


codeTypeArr[69] = "경북";
codeArr[69] = "고령군";
codeNameArr[69] = "고령군";


codeTypeArr[70] = "경북";
codeArr[70] = "구미시";
codeNameArr[70] = "구미시";


codeTypeArr[71] = "경북";
codeArr[71] = "군위군";
codeNameArr[71] = "군위군";


codeTypeArr[72] = "경북";
codeArr[72] = "김천시";
codeNameArr[72] = "김천시";


codeTypeArr[73] = "경북";
codeArr[73] = "문경시";
codeNameArr[73] = "문경시";


codeTypeArr[74] = "경북";
codeArr[74] = "봉화군";
codeNameArr[74] = "봉화군";


codeTypeArr[75] = "경북";
codeArr[75] = "상주시";
codeNameArr[75] = "상주시";


codeTypeArr[76] = "경북";
codeArr[76] = "성주군";
codeNameArr[76] = "성주군";


codeTypeArr[77] = "경북";
codeArr[77] = "안동시";
codeNameArr[77] = "안동시";


codeTypeArr[78] = "경북";
codeArr[78] = "영덕군";
codeNameArr[78] = "영덕군";


codeTypeArr[79] = "경북";
codeArr[79] = "영양군";
codeNameArr[79] = "영양군";


codeTypeArr[80] = "경북";
codeArr[80] = "영주시";
codeNameArr[80] = "영주시";


codeTypeArr[81] = "경북";
codeArr[81] = "영천시";
codeNameArr[81] = "영천시";


codeTypeArr[82] = "경북";
codeArr[82] = "예천군";
codeNameArr[82] = "예천군";


codeTypeArr[83] = "경북";
codeArr[83] = "울릉군";
codeNameArr[83] = "울릉군";


codeTypeArr[84] = "경북";
codeArr[84] = "울진군";
codeNameArr[84] = "울진군";


codeTypeArr[85] = "경북";
codeArr[85] = "의성군";
codeNameArr[85] = "의성군";


codeTypeArr[86] = "경북";
codeArr[86] = "청도군";
codeNameArr[86] = "청도군";


codeTypeArr[87] = "경북";
codeArr[87] = "청송군";
codeNameArr[87] = "청송군";


codeTypeArr[88] = "경북";
codeArr[88] = "칠곡군";
codeNameArr[88] = "칠곡군";


codeTypeArr[89] = "경북";
codeArr[89] = "포항시";
codeNameArr[89] = "포항시";


codeTypeArr[90] = "광주";
codeArr[90] = "광산구";
codeNameArr[90] = "광산구";


codeTypeArr[91] = "광주";
codeArr[91] = "남구";
codeNameArr[91] = "남구";


codeTypeArr[92] = "광주";
codeArr[92] = "동구";
codeNameArr[92] = "동구";


codeTypeArr[93] = "광주";
codeArr[93] = "북구";
codeNameArr[93] = "북구";


codeTypeArr[94] = "광주";
codeArr[94] = "서구";
codeNameArr[94] = "서구";


codeTypeArr[95] = "대구";
codeArr[95] = "남구";
codeNameArr[95] = "남구";


codeTypeArr[96] = "대구";
codeArr[96] = "달서구";
codeNameArr[96] = "달서구";


codeTypeArr[97] = "대구";
codeArr[97] = "달성군";
codeNameArr[97] = "달성군";


codeTypeArr[98] = "대구";
codeArr[98] = "동구";
codeNameArr[98] = "동구";


codeTypeArr[99] = "대구";
codeArr[99] = "북구";
codeNameArr[99] = "북구";


codeTypeArr[100] = "대구";
codeArr[100] = "서구";
codeNameArr[100] = "서구";


codeTypeArr[101] = "대구";
codeArr[101] = "수성구";
codeNameArr[101] = "수성구";


codeTypeArr[102] = "대구";
codeArr[102] = "중구";
codeNameArr[102] = "중구";


codeTypeArr[103] = "대전";
codeArr[103] = "대덕구";
codeNameArr[103] = "대덕구";


codeTypeArr[104] = "대전";
codeArr[104] = "동구";
codeNameArr[104] = "동구";


codeTypeArr[105] = "대전";
codeArr[105] = "서구";
codeNameArr[105] = "서구";


codeTypeArr[106] = "대전";
codeArr[106] = "유성구";
codeNameArr[106] = "유성구";


codeTypeArr[107] = "대전";
codeArr[107] = "중구";
codeNameArr[107] = "중구";


codeTypeArr[108] = "부산";
codeArr[108] = "강서구";
codeNameArr[108] = "강서구";


codeTypeArr[109] = "부산";
codeArr[109] = "금정구";
codeNameArr[109] = "금정구";


codeTypeArr[110] = "부산";
codeArr[110] = "기장군";
codeNameArr[110] = "기장군";


codeTypeArr[111] = "부산";
codeArr[111] = "남구";
codeNameArr[111] = "남구";


codeTypeArr[112] = "부산";
codeArr[112] = "동구";
codeNameArr[112] = "동구";


codeTypeArr[113] = "부산";
codeArr[113] = "동래구";
codeNameArr[113] = "동래구";


codeTypeArr[114] = "부산";
codeArr[114] = "부산진구";
codeNameArr[114] = "부산진구";


codeTypeArr[115] = "부산";
codeArr[115] = "북구";
codeNameArr[115] = "북구";


codeTypeArr[116] = "부산";
codeArr[116] = "사상구";
codeNameArr[116] = "사상구";


codeTypeArr[117] = "부산";
codeArr[117] = "사하구";
codeNameArr[117] = "사하구";


codeTypeArr[118] = "부산";
codeArr[118] = "서구";
codeNameArr[118] = "서구";


codeTypeArr[119] = "부산";
codeArr[119] = "수영구";
codeNameArr[119] = "수영구";


codeTypeArr[120] = "부산";
codeArr[120] = "연제구";
codeNameArr[120] = "연제구";


codeTypeArr[121] = "부산";
codeArr[121] = "영도구";
codeNameArr[121] = "영도구";


codeTypeArr[122] = "부산";
codeArr[122] = "중구";
codeNameArr[122] = "중구";


codeTypeArr[123] = "부산";
codeArr[123] = "해운대구";
codeNameArr[123] = "해운대구";


codeTypeArr[124] = "서울";
codeArr[124] = "강남구";
codeNameArr[124] = "강남구";


codeTypeArr[125] = "서울";
codeArr[125] = "강동구";
codeNameArr[125] = "강동구";


codeTypeArr[126] = "서울";
codeArr[126] = "강북구";
codeNameArr[126] = "강북구";


codeTypeArr[127] = "서울";
codeArr[127] = "강서구";
codeNameArr[127] = "강서구";


codeTypeArr[128] = "서울";
codeArr[128] = "관악구";
codeNameArr[128] = "관악구";


codeTypeArr[129] = "서울";
codeArr[129] = "광진구";
codeNameArr[129] = "광진구";


codeTypeArr[130] = "서울";
codeArr[130] = "구로구";
codeNameArr[130] = "구로구";


codeTypeArr[131] = "서울";
codeArr[131] = "금천구";
codeNameArr[131] = "금천구";


codeTypeArr[132] = "서울";
codeArr[132] = "노원구";
codeNameArr[132] = "노원구";


codeTypeArr[133] = "서울";
codeArr[133] = "도봉구";
codeNameArr[133] = "도봉구";


codeTypeArr[134] = "서울";
codeArr[134] = "동대문구";
codeNameArr[134] = "동대문구";


codeTypeArr[135] = "서울";
codeArr[135] = "동작구";
codeNameArr[135] = "동작구";


codeTypeArr[136] = "서울";
codeArr[136] = "마포구";
codeNameArr[136] = "마포구";


codeTypeArr[137] = "서울";
codeArr[137] = "서대문구";
codeNameArr[137] = "서대문구";


codeTypeArr[138] = "서울";
codeArr[138] = "서초구";
codeNameArr[138] = "서초구";


codeTypeArr[139] = "서울";
codeArr[139] = "성동구";
codeNameArr[139] = "성동구";


codeTypeArr[140] = "서울";
codeArr[140] = "성북구";
codeNameArr[140] = "성북구";


codeTypeArr[141] = "서울";
codeArr[141] = "송파구";
codeNameArr[141] = "송파구";


codeTypeArr[142] = "서울";
codeArr[142] = "양천구";
codeNameArr[142] = "양천구";


codeTypeArr[143] = "서울";
codeArr[143] = "영등포구";
codeNameArr[143] = "영등포구";


codeTypeArr[144] = "서울";
codeArr[144] = "용산구";
codeNameArr[144] = "용산구";


codeTypeArr[145] = "서울";
codeArr[145] = "은평구";
codeNameArr[145] = "은평구";


codeTypeArr[146] = "서울";
codeArr[146] = "종로구";
codeNameArr[146] = "종로구";


codeTypeArr[147] = "서울";
codeArr[147] = "중구";
codeNameArr[147] = "중구";


codeTypeArr[148] = "서울";
codeArr[148] = "중랑구";
codeNameArr[148] = "중랑구";


codeTypeArr[150] = "울산";
codeArr[150] = "남구";
codeNameArr[150] = "남구";


codeTypeArr[151] = "울산";
codeArr[151] = "동구";
codeNameArr[151] = "동구";


codeTypeArr[152] = "울산";
codeArr[152] = "북구";
codeNameArr[152] = "북구";


codeTypeArr[153] = "울산";
codeArr[153] = "울주군";
codeNameArr[153] = "울주군";


codeTypeArr[154] = "울산";
codeArr[154] = "중구";
codeNameArr[154] = "중구";


codeTypeArr[155] = "인천";
codeArr[155] = "강화군";
codeNameArr[155] = "강화군";


codeTypeArr[156] = "인천";
codeArr[156] = "옹진군";
codeNameArr[156] = "옹진군";


codeTypeArr[157] = "인천";
codeArr[157] = "서구";
codeNameArr[157] = "서구";


codeTypeArr[158] = "인천";
codeArr[158] = "계양구";
codeNameArr[158] = "계양구";


codeTypeArr[159] = "인천";
codeArr[159] = "부평구";
codeNameArr[159] = "부평구";


codeTypeArr[160] = "인천";
codeArr[160] = "중구";
codeNameArr[160] = "중구";


codeTypeArr[161] = "인천";
codeArr[161] = "동구";
codeNameArr[161] = "동구";


codeTypeArr[162] = "인천";
codeArr[162] = "남구";
codeNameArr[162] = "남구";


codeTypeArr[163] = "인천";
codeArr[163] = "연수구";
codeNameArr[163] = "연수구";


codeTypeArr[164] = "인천";
codeArr[164] = "남동구";
codeNameArr[164] = "남동구";


codeTypeArr[165] = "전남";
codeArr[165] = "강진군";
codeNameArr[165] = "강진군";


codeTypeArr[166] = "전남";
codeArr[166] = "고흥군";
codeNameArr[166] = "고흥군";


codeTypeArr[167] = "전남";
codeArr[167] = "곡성군";
codeNameArr[167] = "곡성군";


codeTypeArr[168] = "전남";
codeArr[168] = "광양시";
codeNameArr[168] = "광양시";


codeTypeArr[169] = "전남";
codeArr[169] = "구례군";
codeNameArr[169] = "구례군";


codeTypeArr[170] = "전남";
codeArr[170] = "나주시";
codeNameArr[170] = "나주시";


codeTypeArr[171] = "전남";
codeArr[171] = "담양군";
codeNameArr[171] = "담양군";


codeTypeArr[172] = "전남";
codeArr[172] = "목포시";
codeNameArr[172] = "목포시";


codeTypeArr[173] = "전남";
codeArr[173] = "무안군";
codeNameArr[173] = "무안군";


codeTypeArr[174] = "전남";
codeArr[174] = "보성군";
codeNameArr[174] = "보성군";


codeTypeArr[175] = "전남";
codeArr[175] = "순천시";
codeNameArr[175] = "순천시";


codeTypeArr[176] = "전남";
codeArr[176] = "신안군";
codeNameArr[176] = "신안군";


codeTypeArr[177] = "전남";
codeArr[177] = "여수시";
codeNameArr[177] = "여수시";


codeTypeArr[178] = "전남";
codeArr[178] = "영광군";
codeNameArr[178] = "영광군";


codeTypeArr[179] = "전남";
codeArr[179] = "영암군";
codeNameArr[179] = "영암군";


codeTypeArr[180] = "전남";
codeArr[180] = "완도군";
codeNameArr[180] = "완도군";


codeTypeArr[181] = "전남";
codeArr[181] = "장성군";
codeNameArr[181] = "장성군";


codeTypeArr[182] = "전남";
codeArr[182] = "장흥군";
codeNameArr[182] = "장흥군";


codeTypeArr[183] = "전남";
codeArr[183] = "진도군";
codeNameArr[183] = "진도군";


codeTypeArr[184] = "전남";
codeArr[184] = "함평군";
codeNameArr[184] = "함평군";


codeTypeArr[185] = "전남";
codeArr[185] = "해남군";
codeNameArr[185] = "해남군";


codeTypeArr[186] = "전남";
codeArr[186] = "화순군";
codeNameArr[186] = "화순군";


codeTypeArr[187] = "전북";
codeArr[187] = "고창군";
codeNameArr[187] = "고창군";


codeTypeArr[188] = "전북";
codeArr[188] = "군산시";
codeNameArr[188] = "군산시";


codeTypeArr[189] = "전북";
codeArr[189] = "김제시";
codeNameArr[189] = "김제시";


codeTypeArr[190] = "전북";
codeArr[190] = "남원시";
codeNameArr[190] = "남원시";


codeTypeArr[191] = "전북";
codeArr[191] = "무주군";
codeNameArr[191] = "무주군";


codeTypeArr[192] = "전북";
codeArr[192] = "부안군";
codeNameArr[192] = "부안군";


codeTypeArr[193] = "전북";
codeArr[193] = "순창군";
codeNameArr[193] = "순창군";


codeTypeArr[194] = "전북";
codeArr[194] = "완주군";
codeNameArr[194] = "완주군";


codeTypeArr[195] = "전북";
codeArr[195] = "익산시";
codeNameArr[195] = "익산시";


codeTypeArr[196] = "전북";
codeArr[196] = "임실군";
codeNameArr[196] = "임실군";


codeTypeArr[197] = "전북";
codeArr[197] = "장수군";
codeNameArr[197] = "장수군";


codeTypeArr[198] = "전북";
codeArr[198] = "전주시";
codeNameArr[198] = "전주시";


codeTypeArr[199] = "전북";
codeArr[199] = "정읍시";
codeNameArr[199] = "정읍시";


codeTypeArr[200] = "전북";
codeArr[200] = "진안군";
codeNameArr[200] = "진안군";


codeTypeArr[201] = "제주";
codeArr[201] = "서귀포시";
codeNameArr[201] = "서귀포시";


codeTypeArr[202] = "제주";
codeArr[202] = "제주시";
codeNameArr[202] = "제주시";


codeTypeArr[203] = "충남";
codeArr[203] = "계룡시";
codeNameArr[203] = "계룡시";


codeTypeArr[204] = "충남";
codeArr[204] = "공주시";
codeNameArr[204] = "공주시";


codeTypeArr[205] = "충남";
codeArr[205] = "금산군";
codeNameArr[205] = "금산군";


codeTypeArr[206] = "충남";
codeArr[206] = "논산시";
codeNameArr[206] = "논산시";


codeTypeArr[207] = "충남";
codeArr[207] = "당진시";
codeNameArr[207] = "당진시";


codeTypeArr[208] = "충남";
codeArr[208] = "보령시";
codeNameArr[208] = "보령시";


codeTypeArr[209] = "충남";
codeArr[209] = "부여군";
codeNameArr[209] = "부여군";


codeTypeArr[210] = "충남";
codeArr[210] = "서산시";
codeNameArr[210] = "서산시";


codeTypeArr[211] = "충남";
codeArr[211] = "서천군";
codeNameArr[211] = "서천군";


codeTypeArr[212] = "충남";
codeArr[212] = "아산시";
codeNameArr[212] = "아산시";


codeTypeArr[213] = "충남";
codeArr[213] = "예산군";
codeNameArr[213] = "예산군";


codeTypeArr[214] = "충남";
codeArr[214] = "천안시";
codeNameArr[214] = "천안시";


codeTypeArr[215] = "충남";
codeArr[215] = "청양군";
codeNameArr[215] = "청양군";


codeTypeArr[216] = "충남";
codeArr[216] = "태안군";
codeNameArr[216] = "태안군";


codeTypeArr[217] = "충남";
codeArr[217] = "홍성군";
codeNameArr[217] = "홍성군";


codeTypeArr[218] = "충북";
codeArr[218] = "괴산군";
codeNameArr[218] = "괴산군";


codeTypeArr[219] = "충북";
codeArr[219] = "단양군";
codeNameArr[219] = "단양군";


codeTypeArr[220] = "충북";
codeArr[220] = "보은군";
codeNameArr[220] = "보은군";


codeTypeArr[221] = "충북";
codeArr[221] = "영동군";
codeNameArr[221] = "영동군";


codeTypeArr[222] = "충북";
codeArr[222] = "옥천군";
codeNameArr[222] = "옥천군";


codeTypeArr[223] = "충북";
codeArr[223] = "음성군";
codeNameArr[223] = "음성군";


codeTypeArr[224] = "충북";
codeArr[224] = "제천시";
codeNameArr[224] = "제천시";


codeTypeArr[225] = "충북";
codeArr[225] = "증평군";
codeNameArr[225] = "증평군";


codeTypeArr[226] = "충북";
codeArr[226] = "진천군";
codeNameArr[226] = "진천군";


codeTypeArr[227] = "충북";
codeArr[227] = "청주시";
codeNameArr[227] = "청주시";


codeTypeArr[228] = "충북";
codeArr[228] = "충주시";
codeNameArr[228] = "충주시";

codeTypeArr[229] = "세종";
codeArr[229] = "세종특별자치시";
codeNameArr[229] = "세종특별자치시";

// 데이터 JS화
var local = {
    relatedIndusts : ' ',
    coperateType : localStorage.getItem('coperateType')
}

//로컬스토리지 확인
function checkLocalStorage() {

    //이전 페이지 로컬스토리지 확인(되돌리기)
    for(var key in local) {
        if(local[key] == null || local[key] == '') {
            location.href="/";
            return;
        }
    }
    //현재 페이지 로킬스토리지 확인(그리기용)
    local.area = localStorage.getItem('area');
    startLocalStorage(local);
}

//로컬스토리지 그리기
function startLocalStorage(local) {

    if(local.area != null && local.area != '') {
        local.area = local.area.split('/');
        $('#sido').val(local.area[0]);
        jsGetCode(document.schfrm.sido.value);
        setSigunguByLocalStorage(local.area[1]);
        if (local.area.length > 2) {
            setEtcCity(local.area[0], local.area[1]);
            $('#schfrm > div.select-box-1.wd-1 > select:nth-child(3)').val(local.area[2])
        }

        // selectMap(local.area[1]);
        // js_gun(local.area[0],local.area[1],'busan','y');
        // selectMap(local.area[1]);
        /*new Promise((js_gun, selectMap) => {
            // js_gun(local.area[0],local.area[1],'busan','y');
        }).then(() => {
            // 이부분 왜 실행하는지 몰라서 주석처리함(이태화)
            selectMap(local.area[1]);
        });*/
    }
}

function setSigunguByLocalStorage(sigungu) {
    var area = 'area[alt='+ sigungu +']';
    hData = $(area).data('maphilight') || {};
    hData.alwaysOn = true;
    $(area).data('maphilight', hData ).trigger('alwaysOn.maphilight');
    var options = $('#sigungu option');
    for (var i = 0; i < options.length; i++) {
        if ($(options[i]).val() === sigungu) {

            document.schfrm.sigungu.value = sigungu;
        }
    }
}

//로컬스토리지 저장 페이지이동
function saveLocalStorage() {
    var sido = $('#sido').val();
    var sigungu = $('#sigungu').val();
    var etc = $('#schfrm > div.select-box-1.wd-1 > select:nth-child(3)').val();
    var area = sido + '/' + sigungu;
    if (typeof etc != 'undefined') {
        area = area + '/' + etc;
    }

    localStorage.setItem('area', area);
    
    iorsCode.forEach(function(data) {
        if (sido === data.do && sigungu === data.sigungu) {
            if (data.etc === '') {
                localStorage.setItem('office', data.office);
            } else {
                if (data.etc.includes(etc)) {
                    localStorage.setItem('office', data.office);
                }
            }
        }
    });
}

// 팝업창 종료
function closeLayerPop(sel) {
    var $findPop = $(sel);
    $findPop.fadeOut(150);
}

//특정 채널을 선택하면 해당 카테고리를 생성
export function jsGetCode(num, callback){

    //해당 채널의 서브 카테고리 배열 길이만큼 반복
    var idx = 0;
    var frm = document.getElementById("schfrm");

    frm.sigungu.options[idx]=new Option("시/군/구","");

    idx++;
    for(ctr=0;ctr < codeTypeArr.length;ctr++) {
        //카테고리에 해당하는 콤보박스의 값을 채움
        if(codeTypeArr[ctr] == num)
        {
            frm.sigungu.options[idx]=new Option(codeNameArr[ctr],codeArr[ctr]);

            idx++;
            fmselect_init(num);
        }
    }

    frm.sigungu.length = idx;

    if(frm.sido.value=='전체') {
        $('.right_map_sido').hide();
        $('.left_map_korea').show();
        $("img").maphilight({
            fill:true,
            fillColor:'3a52b4',
            fillOpacity: 0.2,
            strokeColor:'3a52b4',
            strokeOpacity: 1,
            strokeWidth: 4,
            fade:true
        });
    }

    // var sinx ='';
    // frm.sigungu.selectedIndex = sinx;

}

export function fmselect(si,name,e){

    var schfrm = document.getElementById("schfrm");
    var sinx=0;
    var idx = 0;

    for(i=0; i<schfrm.sido.length; i++) {
        if(schfrm.sido.options[i].value == name) {
            sinx =  i;
        }
    }

    schfrm.sido.selectedIndex = sinx;

    idx++;

    for(ctr=0;ctr < codeTypeArr.length;ctr++) {
        //카테고리에 해당하는 콤보박스의 값을 채움

        if(codeTypeArr[ctr] == name)
        {
            schfrm.sigungu.options[idx]=new Option(codeNameArr[ctr],codeArr[ctr]);
            idx++;
        }
    }

    schfrm.sigungu.length = idx;
    var str = "<img id='sigungu_map' name='sigungu_map' src='../img/map/map_" + si + ".gif' alt='" + name + "지도' usemap='#map_" + si + "' />";
    document.getElementById("inner_sigungu_map").innerHTML = str;
    $('.left_map_korea').hide();
    $('.right_map_sido').show();
    if($('#sido').val() == '서울' || $('#sido').val() == '경기' || $('#sido').val() == '인천') {
        $("img").maphilight({
            fill:true,
            fillColor:'d54d4d',
            strokeColor:'d54d4d',
            fillOpacity: 0.2,
            strokeOpacity: 1,
            strokeWidth: 4,
            fade:true
        });
    } else {
        $("img").maphilight({
            fill:true,
            fillColor:'3a52b4',
            fillOpacity: 0.2,
            strokeColor:'3a52b4',
            strokeOpacity: 1,
            strokeWidth: 4,
            fade:true
        });
    }

}
// '경기','부천시','kyunggido','y',event
export function js_gun(sido,sigungu,sido_gubun,hit,e){
    var schfrm = document.getElementById("schfrm");
    schfrm.sido_map.value = sido;
    schfrm.sigungu_map.value = sigungu;
    schfrm.sido_gubun.value = sido_gubun;
    schfrm.sigungu.value = sigungu;
    setEtcCity(sido, sigungu);
    return false;
}

function setEtcCity(sido, name) {
    var select = document.createElement('select');
    $(select).attr("id", "thirdCity");
    
    // var inchen = ['강화군', '금곡동','남동 국가산업단지','당하동','대곡동','덕교동','마전동','무의동','불로동, 불노동','연수구 송도매립지','오류동','옹진군','왕길동', '운복동','운서동','원당동','을왕동','인천경제자유구역','중구 운남동','중산동','그 외 지역']
    // var yeounchun = ['김포시', '양주시', '포천시', '화성시', '그 외 지역'];
    // var echun = ['가평군', '광주시', '양평군', '여주시', '그 외 지역'];

    // 경기도
    var suwon = ['권선구', '영통구', '팔달구', '장안구'];
    var sihoung = ['반월특수지역', '반월특수지역에서 해제된 지역', '그 외 지역'];
    var sungnam = ['수정구', '중원구', '분당구'];
    var pyungtaek = ['군문동','동삭동','비전동','세교동','소사동','신대동','용이동','월곡동','유천동','죽백동','지제동','청룡동','통복동','평택동','합정동','팽성읍','안중읍','오성면','청북면','포승면','현덕면',
                    '가재동','도일동','독곡동','모곡동','서정동','신장동','이충동', '장당동','장안동','지산동','칠괴동','칠원동','고덕면','서탄면','진위면'];
    var namyangju = ['다산동', '별내동', '별내면', '수동면', '오남읍', '와부읍', '조안면', '진건읍', '진전읍', '퇴계원면', '화도읍', '그 외 지역'];
    var yongin = ['고기동', '고당리', '고림동', '고매동', '공세동', '구갈동', '김량장동', '남동역북동', '남사면', '농서동', '독성리', '동백동',
                  '동천동', '두창리', '마북동', '마평동', '맹리', '모현면', '문촌리', '백암면', '보라동', '보정동', '사암리', '삼가동',
                  '상갈동', '상하동', '상현동', '서천동', '성복동', '신갈동', '신봉동', '양지면', '언남동', '영덕동', '운학동', '원삼면 가재월리',
                  '원삼면 목신리', '유방동', '이동면', '좌항리', '죽릉리', '죽전동', '중동', '지곡동', '포곡읍', '풍덕천동', '하갈동', '학일리',
                   '해곡동', '호동', '그 외 지역'];
    var ansung = ['가사동', '가현동', '계동', '고삼면', '공도읍', '구포동', '금광면', '금산동', '금석동', '기솔리', '낙원동', '내강리', '내장리', '당목리', '당왕동', '대덕면', '대천동', '덕산리', '도기동', '동본동', '두현리', '매산리', '명륜동', '미양면', '미장리', '발화동', '배태리', '보개면', '봉남동', '봉산동', '사곡동', '삼죽면 마전리', '삼죽면 용월리', '서운면', '서인동', '석정동', '성남동', '숭인동', '신건지동', '신모산동', '신소현동', '신흥동', '아양동', '양성면', '연지동', '영동', '옥산동', '옥천동', '용설리', '원곡면', '율곡리', '인지동', '일죽면', '장계리', '장릉리', '장원리', '죽산리', '죽산면', '죽산면 두교리', '중리동', '진촌리', '창전동', '칠장리', '현수동', '그 외 지역'];

    // 인천광역시
    var inchen_seogu = ['대곡동', '불로동, 불노동', '마전동', '금곡동', '오류동', '왕길동', '당하동', '원당동', '그 외 지역'];
    var inchen_yeonsugu = ['인천경제자유구역', '송도매립지', '그 외 지역'];
    var inchen_namdonggu = ['남동 국가산업단지', '그 외 지역'];
    var inchen_junggu = ['운남동', '운복동', '운서동', '중산동', '덕교동', '을왕동', '무의동', '그 외 지역'];
    
    // 전라남도
    var yeosu = ['종화동','수정동','공화동','관문동','고소동','동산동','중앙동','교동','군자동','충무동','연등동','광무동','서교동','봉강동','봉산동','남산동','국동','신월동','경호동','여서동','문수동','오림동',
                 '미평동','둔덕동','오천동','만흥동','덕충동','돌산읍','남면','화정면','삼산면','쌍봉동','시전동','여천동','주삼동','삼일동','묘도동','상암동','소라면','화양면','율촌면'];

    // 경상남도
    var changwon = ['마산합포구', '마산회원구', '의창구', '성산구', '진해구'];


    // TODO: 과밀억제권역 수정하기
    if (sido === '서울') {
        $("img").maphilight({
            fill:true,
            fillColor:'d54d4d',
            strokeColor:'d54d4d',
            fillOpacity: 0.2,
            strokeOpacity: 1,
            strokeWidth: 4,
            fade:true
        });
        localStorage.setItem('overpopulated', true);
    } else if (sido === '인천' || sido === '경기') {
        // if (name === '이천시' || name === '연천군' || name === '김포시' || name === '양주시' || name === '포천시' || name === '화성시' || name === '가평군' || name === '광주시' || name === '양평군' || name === '여주시') {
        if (name === '이천시' || name === '연천군' || name === '김포시' || name === '양주시' || name === '포천시' || name === '화성시' || name === '가평군' || name === '광주시' || name === '양평군' || name === '여주시' 
            || name === '남양주시' || name === '동두천시' || name === '시흥시' || name === '안산시' || name === '안성시' || name === '오산시' || name === '용인시' || name === '파주시' || name === '평택시' || name === '중구' 
            || name === '중구' || name === '서구' || name === '연수구' || name === '남동구' || name === '강화군' || name === '옹진군') {
            $("img").maphilight({
                fill:true,
                fillColor:'3a52b4',
                fillOpacity: 0.2,
                strokeColor:'3a52b4', // 파랑
                strokeOpacity: 1,
                strokeWidth: 4,
                fade:true
            });
            localStorage.setItem('overpopulated', false);
        } else {
            $("img").maphilight({
                fill:true,
                fillColor:'d54d4d', // 빨강
                strokeColor:'d54d4d',
                fillOpacity: 0.2,
                strokeOpacity: 1,
                strokeWidth: 4,
                fade:true
            });
            localStorage.setItem('overpopulated', true);
        }
    } else {
        $("img").maphilight({
            fill:true,
            fillColor:'3a52b4',
            fillOpacity: 0.2,
            strokeColor:'3a52b4',
            strokeOpacity: 1,
            strokeWidth: 4,
            fade:true
        });
        localStorage.setItem('overpopulated', false);
    }

    if (name === '수원시') {
        suwon.forEach(function(name, index) {
            select[index] = new Option(name, name);
        })
    }
    if (name === '성남시') {
        sungnam.forEach(function(name, index) {
            select[index] = new Option(name, name);
        })
    }
    if (name === '평택시') {
        pyungtaek.forEach(function(name, index) {
            select[index] = new Option(name, name);
        })
    }
    if (name === '창원시') {
        changwon.forEach(function(name, index) {
            select[index] = new Option(name, name);
        })
    }
    if (name === '여수시') {
        yeosu.forEach(function(name, index) {
            select[index] = new Option(name, name);
        })
    }
    if (name === '남양주시') {
        namyangju.forEach(function(name, index) {
            select[index] = new Option(name, name);
        })
        // $("img").maphilight({
        //     fill:true,
        //     fillColor:'3a52b4',
        //     fillOpacity: 0.2,
        //     strokeColor:'3a52b4',
        //     strokeOpacity: 1,
        //     strokeWidth: 4,
        //     fade:true
        // });
    }
    if (name === '용인시') {
        yongin.forEach(function(name, index) {
            select[index] = new Option(name, name);
        });
        // $("img").maphilight({
        //     fill:true,
        //     fillColor:'3a52b4',
        //     fillOpacity: 0.2,
        //     strokeColor:'3a52b4',
        //     strokeOpacity: 1,
        //     strokeWidth: 4,
        //     fade:true
        // });
    }
    if (sido === '인천' && name === '서구') {
        inchen_seogu.forEach(function(name, index) {
            select[index] = new Option(name, name);
        });
    }
    if (sido === '인천' && name === '연수구') {
        inchen_yeonsugu.forEach(function(name, index) {
            select[index] = new Option(name, name);
        });
    }
    if (sido === '인천' && name === '남동구') {
        inchen_namdonggu.forEach(function(name, index) {
            select[index] = new Option(name, name);
        });
    }
    if (sido === '인천' && name === '중구') {
        inchen_junggu.forEach(function(name, index) {
            select[index] = new Option(name, name);
        });
    }
    if (name === '시흥시') {
        sihoung.forEach(function(name, index) {
            select[index] = new Option(name, name);
        });
        // $("img").maphilight({
        //     fill:true,
        //     fillColor:'3a52b4',
        //     fillOpacity: 0.2,
        //     strokeColor:'3a52b4',
        //     strokeOpacity: 1,
        //     strokeWidth: 4,
        //     fade:true
        // });
    }
/*    if (name === '연천군') {
        yeounchun.forEach(function(name, index) {
            select[index] = new Option(name, name);
        });
        $("img").maphilight({
            fill:true,
            fillColor:'3a52b4',
            fillOpacity: 0.2,
            strokeColor:'3a52b4',
            strokeOpacity: 1,
            strokeWidth: 4,
            fade:true
        });
    }*/
    if (name === '안성시') {
        ansung.forEach(function(name, index) {
            select[index] = new Option(name, name);
        });
        // $("img").maphilight({
        //     fill:true,
        //     fillColor:'3a52b4',
        //     fillOpacity: 0.2,
        //     strokeColor:'3a52b4',
        //     strokeOpacity: 1,
        //     strokeWidth: 4,
        //     fade:true
        // });
    }
/*    if (name === '이천시') {
        echun.forEach(function(name, index) {
            select[index] = new Option(name, name);
        });
        $("img").maphilight({
            fill:true,
            fillColor:'3a52b4',
            fillOpacity: 0.2,
            strokeColor:'3a52b4',
            strokeOpacity: 1,
            strokeWidth: 4,
            fade:true
        });
    }*/

    if (select.options.length > 0) {
        var etcCount = $('#schfrm > div.select-box-1.wd-1 > select:nth-child(3)').length;
        if (etcCount > 0) {
            $('#schfrm > div.select-box-1.wd-1 > select:nth-child(3)').remove();
        }
        $(select).addClass('select-type-1');
        $(select).css('width', 'calc(32% - 10px)');
        $('.select-box-1.wd-1 > select').css('width', 'calc(32% - 10px)');
        $('#schfrm > div.select-box-1.wd-1').append(select);
    } else {
        var etcSelect = $('#schfrm > div.select-box-1.wd-1 > select:nth-child(3)');
        if (etcSelect.length > 0) {
            $(etcSelect).remove();
            $('.select-box-1.wd-1 > select').css('width', 'calc(40% - 10px)');
        }
    }
    saveLocalStorage();
}

function fmselect_init(sido){

    var si = "";
    if(sido == "서울"){
        si = "seoul";
    } else if(sido == "인천"){
        si = "incheon";
    } else if(sido == "경기"){
        si = "kyunggido";
    } else if(sido == "강원"){
        si = "gangwondo";
    } else if(sido == "충남"){
        si = "chungnam";
    } else if(sido == "세종"){
        si = "sejong";
    } else if(sido == "대전"){
        si = "daejeon";
    } else if(sido == "충북"){
        si = "chungbuk";
    } else if(sido == "경북"){
        si = "kyungbuk";
    } else if(sido == "대구"){
        si = "daegu";
    } else if(sido == "경남"){
        si = "kyungnam";
    } else if(sido == "울산"){
        si = "ulsan";
    } else if(sido == "부산"){
        si = "busan";
    } else if(sido == "전북"){
        si = "jeonbuk";
    } else if(sido == "광주"){
        si = "kwangju";
    } else if(sido == "전남"){
        si = "jeonnam";
    } else if(sido == "제주"){
        si = "jeju";
    }

    str = "<img id='sigungu_map' name='sigungu_map' src='../img/map/map_" + si + ".gif' alt='" + sido + "지도' usemap='#map_"+ si + "' />";

    document.getElementById("inner_sigungu_map").innerHTML = str;
    $('.left_map_korea').hide();
    $('.right_map_sido').show();
    if($('#sido').val() == '서울' || $('#sido').val() == '경기' || $('#sido').val() == '인천') {
        $("img").maphilight({
            fill:true,
            fillColor:'d54d4d',
            strokeColor:'d54d4d',
            fillOpacity: 0.2,
            strokeOpacity: 1,
            strokeWidth: 4,
            fade:true
        });
    }
    else {
        $("img").maphilight({
            fill:true,
            fillColor:'3a52b4',
            fillOpacity: 0.2,
            strokeColor:'3a52b4',
            strokeOpacity: 1,
            strokeWidth: 4,
            fade:true
        });
    }

}

function selectMap(sido, sigungu){
    $('.right_map_sido area').each(function() {
        $(this).data('maphilight',{alwaysOn:false}).trigger('alwaysOn.maphilight');
    });

    let tg = 'area[alt='+ sigungu +']';
    if (sigungu === '중구' || sigungu === '남구' || sigungu === '동구' || sigungu === '북구' || sigungu === '서구' || sigungu === '중구' || sigungu === '고성군') {
        if (sido === '인천' && sigungu === '중구') {
            tg = 'area[alt=' + sido + sigungu + '1]';
        } else {
            tg = 'area[alt='+ sido + sigungu +']';
        }
    }
    $(tg).click();
}