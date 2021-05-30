// 교육과정 설계: 주어진 필수과목을 순서대로 이수할 수 있도록 설계 됐으면 YES 아니면 NO

function solution(necessaries, subjects) {
  const necessaryQueue = necessaries.split('');
  let necessary = necessaryQueue.shift();

  [...subjects].forEach(item => {
    if (item === necessary) {
      necessary = necessaryQueue.shift();
    }
  });

  if (!necessary) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

solution('CBA', 'CBDAGE') // 7