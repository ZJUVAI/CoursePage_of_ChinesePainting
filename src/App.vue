<template>
  <div>
    <!-- 页眉 Header -->
    <header class="page-header">
      <h1 class="course-title">基于人工智能的国画传承与创新</h1>
      <nav class="nav-menu">
        <router-link to="/CoursePage_of_ChinesePainting/home">简介</router-link>
        <router-link to="/CoursePage_of_ChinesePainting/timetable">课表</router-link>
      </nav>
      <div class="header-line"></div>
    </header>

    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style>

/* 页眉 */
.page-header {
  width: 100%;
  text-align: center;
  padding: 1vh 0;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}

.course-title {
  font-size: 3vw;
  margin: 1vw;
  position: relative;
  display: inline-block;
  padding: 0 1px;
  background: #ffffff; /* 遮住横线 */
  z-index: 1;
}

.header-line {
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.3vh;
  background-color: #e0e0e0;
}

.nav-menu a {
  margin-left: 1vw;
  text-decoration: none;
  color: #6b6b6b;
  font-weight: bold;
}

.nav-menu a:hover {
  color: #1e90ff;
}

.router-link-active {
  color: #1976d2; /* 蓝色 */
  font-weight: bold;
  border-bottom: 0.2vh solid #1976d2; /* 可选，下划线效果 */
}

/* 页面主体 */
.container {
  text-align: left;
  max-width: 40vw;
  margin: 8vw 0;
  padding: 0 0;
}

.container section {
  margin-bottom: 10vh;
}

.container h2 {
  font-size: 2vw;
  margin-bottom: 1vw;
  color: #2c3e50;
}

.container p {
  font-size: 1vw;
  line-height: 1.6;
  color: #101010;
}

</style>
