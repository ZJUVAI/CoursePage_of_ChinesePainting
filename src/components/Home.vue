<template>
  <div>
    <!-- 页面主体 -->
    <main class="container">
      <section class="course-intro">
        <h2>课程介绍</h2>
        <p>本课程旨在结合人工智能技术与中国国画的艺术实践，帮助学生系统掌握国画相关的重要概念，并具备国画赏析能力。课程内容涵盖 AI 与计算机技术在国画数据上的应用，包括数据分析、图像处理和智能生成等方法。同时，引导学生分析人工智能与计算机技术在国画数据未来应用中的潜力，理解国画在中华文明传承中的重要作用。通过课程学习，学生能够深入理解国画数据中所蕴含的丰富哲理与思政内涵，实现对国画艺术与现代技术结合的全面认识。</p>
        <img :src="img1" alt="" width="400vw">
      </section>

      <section class="course-method">
        <h2>教学方式</h2>
        <p>采用线上+线下的教学方式
          <br>线上使用MOOC平台
          <br>线下采用课堂教学与展览欣赏结合的形式
        </p>
      </section>

      <section class="teacher-intro">
        <h2>教师介绍</h2>
        <p>陈为(<a href="http://www.cad.zju.edu.cn/home/chenwei/index_cn.html" target="_blank" rel="noopener noreferrer">Wei Chen</a>)
        <br>Email: chenvis@zju.edu.cn
        <br>Office: 蒙民伟楼504</p>
      </section>

      <section class="assistant-intro">
        <h2>助教介绍</h2>
        <p>朱俊杰
        <br>Email: 2878592560@qq.com
        <br>Office: 蒙民伟楼308</p>
      </section>

      <section class="time-location">
        <h2>上课时间与地点</h2>
        <p>时间：2025-2026 秋冬学期 周二 第11-12节课</p>
        <p>地点：紫金港北3-117</p>
      </section>
    </main>
    
  </div>
</template>

<script setup>
import img1 from '../assets/img1.png'
</script>

<style>

img {
  max-width: 100%;   /* 最大宽度不超过父元素 */
  height: auto;      /* 高度自动缩放，保持比例 */
  display: block;    /* 去掉底部多余空隙 */
}

</style>
