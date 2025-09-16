<template>
  <div class="grid-schedule">
    <h2>课表</h2>
    <div class="grid-container">
      <div class="card">
        <h3>一、课程导论与学习路径
        <br>二、人工智能与中国绘画的交叉融合</h3>
        <p>星期二(09.16)</p>
        <p>紫金港北3-117</p>
      </div>
      <div class="card">
        <h3>三、中国绘画图像的数据建模与表达</h3>
        <p>星期二(09.23)</p>
        <p>紫金港北3-117</p>
      </div>
      <div class="card">
        <h3>四、中国传统绘画基础知识</h3>
        <p>星期二(10.07)因国庆假调到9.28号上</p>
        <p>线上</p>
      </div>
      <div class="card">
        <h3>浙大艺术与考古博物馆参观</h3>
        <p>星期二（9.30）</p>
        <p>浙大艺术与考古博物馆</p>
      </div>
      <div class="card">
        <h3>五、中国绘画数据的标注方法</h3>
        <p>星期二(10.14)</p>
        <p>紫金港北3-117</p>
      </div>
      <div class="card">
        <h3>六、中国绘画色彩的智能修复技术</h3>
        <p>星期二(10.21)</p>
        <p>线上</p>
      </div>
      <div class="card">
        <h3>七、中国绘画的流派分析</h3>
        <p>星期二(10.28)</p>
        <p>线上</p>
      </div>
      <div class="card">
        <h3>八、中国绘画与诗词的联动分析</h3>
        <p>星期二(11.4)</p>
        <p>线上</p>
      </div>
      <div class="card">
        <h3>九、中国绘画与历史的联动分析</h3>
        <p>星期二(11.11)</p>
        <p>线上</p>
      </div>
      <div class="card">
        <h3>十、中国绘画图像的智能渲染方法
        <br>十一、中国绘画图像的创作生成</h3>
        <p>星期二(11.18)</p>
        <p>线上</p>
      </div>
      <div class="card">
        <h3>十二、中国绘画的数字展陈设计与传播</h3>
        <p>星期二(11.25)</p>
        <p>线上</p>
      </div>
      <div class="card">
        <h3>十三、中国绘画大模型的构建与应用
        <br>十四、人工智能时代的中国绘画传承与创新挑战</h3>
        <p>星期二(12.2)</p>
        <p>紫金港北3-117</p>
      </div>
      <div class="card">
        <h3>学生讲解+大作业答疑</h3>
        <p>星期二(12.9)</p>
        <p>紫金港北3-117</p>
      </div>
      <div class="card">
        <h3>学生讲解+大作业答疑</h3>
        <p>星期二(12.16)</p>
        <p>紫金港北3-117</p>
      </div>
      <div class="card">
        <h3>期末考核</h3>
        <p>星期二(12.23)</p>
        <p>紫金港北3-117</p>
      </div>
      <div class="card">
        <h3>期末考核</h3>
        <p>星期二(12.30)</p>
        <p>紫金港北3-117</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-schedule {
  padding: 5vw;
}

.grid-schedule h2 {
  font-size: 2vw;
  margin-bottom: 3vh;
  color: #2c3e50;
}

/* 4x4 网格布局 */
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 每行4列 */
  gap: 1vw; /* 卡片之间的间距 */
}

/* 卡片样式 */
.card {

  border: 1px solid #ddd;
  border-radius: 1vw;
  padding: 2vw;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-0.5vw);
  box-shadow: 0 0.5vw 1vw rgba(0,0,0,0.12);
}

.card h3 {
  height: 60%;
  margin: 0 0 1vw;
  font-size: 1.2vw;
  color: #1e88e5;
}
</style>
