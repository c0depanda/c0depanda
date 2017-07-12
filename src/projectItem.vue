<template>
    <transition name="rad">
        <!-- Main Page -->
        <main class="main">
            <!-- Left Slider -->
            <router-link tag="div" :to="{ name: 'projectlist', params: { name: prevProject.toLowerCase()}}" class="slider__left slido">
                <div class="slider__text">{{prevProject}}</div>
            </router-link>
            <!-- Project Page  -->
            <div class="project">
                <!-- Project Page -->
                <div class="project-section">
                    <div class="container">
                        <transition name="panda">
                            <!-- Browser View -->
                            <div class="browser" v-if="forloop">
                                <!-- browser header -->
                                <div class="browser__header">
                                    <!-- Three Dots -->
                                    <div class="browser__header__dots"></div>
                                    <div class="browser__header__dots"></div>
                                    <div class="browser__header__dots"></div>
                                </div>
                                <!-- Browser content -->
                                <div class="browser__content">
                                    <!-- Work Image -->
                                    <img src="/assets/img/forloop-Landing-Page.jpg" alt="" class="project__image">
                                </div>
                            </div>
                        </transition>
    
                        <transition name="panda">
                            <!-- Browser View -->
                            <div class="browser" v-if="haute">
                                <!-- browser header -->
                                <div class="browser__header">
                                    <!-- Three Dots -->
                                    <div class="browser__header__dots"></div>
                                    <div class="browser__header__dots"></div>
                                    <div class="browser__header__dots"></div>
                                </div>
                                <!-- Browser content -->
                                <div class="browser__content">
                                    <!-- Work Image -->
                                    <img src="/assets/img/haute.jpg" alt="" class="project__image">
                                </div>
                            </div>
                        </transition>
    
                        <transition name="panda">
                            <!-- Browser View -->
                            <div class="browser" v-if="buffrspace">
                                <!-- browser header -->
                                <div class="browser__header">
                                    <!-- Three Dots -->
                                    <div class="browser__header__dots"></div>
                                    <div class="browser__header__dots"></div>
                                    <div class="browser__header__dots"></div>
                                </div>
                                <!-- Browser content -->
                                <div class="browser__content">
                                    <!-- Work Image -->
                                    <img src="/assets/img/buffrspace.jpg" alt="" class="project__image">
                                </div>
                            </div>
                        </transition>
    
                        <transition name="panda">
                            <!-- Browser View -->
                            <div class="browser" v-if="hngtech">
                                <!-- browser header -->
                                <div class="browser__header">
                                    <!-- Three Dots -->
                                    <div class="browser__header__dots"></div>
                                    <div class="browser__header__dots"></div>
                                    <div class="browser__header__dots"></div>
                                </div>
                                <!-- Browser content -->
                                <div class="browser__content">
                                    <!-- Work Image -->
                                    <img src="/assets/img/HNGTECH.jpg" alt="" class="project__image">
                                </div>
                            </div>
                        </transition>
    
                        <transition name="panda">
                            <!-- Browser View -->
                            <div class="browser" v-if="recode">
                                <!-- browser header -->
                                <div class="browser__header">
                                    <!-- Three Dots -->
                                    <div class="browser__header__dots"></div>
                                    <div class="browser__header__dots"></div>
                                    <div class="browser__header__dots"></div>
                                </div>
                                <!-- Browser content -->
                                <div class="browser__content">
                                    <!-- Work Image -->
                                    <img src="/assets/img/reCode-Landing.jpg" alt="" class="project__image">
                                </div>
                            </div>
                        </transition>
    
                        <transition name="panda">
                            <!-- Browser View -->
                            <div class="browser" v-if="hotelsng">
                                <!-- browser header -->
                                <div class="browser__header">
                                    <!-- Three Dots -->
                                    <div class="browser__header__dots"></div>
                                    <div class="browser__header__dots"></div>
                                    <div class="browser__header__dots"></div>
                                </div>
                                <!-- Browser content -->
                                <div class="browser__content">
                                    <!-- Work Image -->
                                    <img src="/assets/img/hng.jpg" alt="" class="project__image">
                                </div>
                            </div>
                        </transition>
    
                        <transition name="panda">
                            <!-- Browser View -->
                            <div class="browser" v-if="airtel">
                                <!-- browser header -->
                                <div class="browser__header">
                                    <!-- Three Dots -->
                                    <div class="browser__header__dots"></div>
                                    <div class="browser__header__dots"></div>
                                    <div class="browser__header__dots"></div>
                                </div>
                                <!-- Browser content -->
                                <div class="browser__content">
                                    <!-- Work Image -->
                                    <img src="/assets/img/Airtel.jpg" alt="" class="project__image">
                                </div>
                            </div>
                        </transition>
    
                        <transition name="panda2">
                            <div v-if="forloop">
                                <!-- Project title -->
                                <h1 class="project__title">forLOOP</h1>
                                <p class="project__description">A community of passionate software developers and enthusiasts across Africa.</p>
                                <div class="project__action">
                                    <a href="https://c0depanda.bitbucket.io/forLoop/" target="_blank" class="btn btn--default">visit website</a>
                                </div>
                                <router-link to="/projects" class="back">back to my work</router-link>
                            </div>
                        </transition>
    
                        <transition name="panda2">
                            <div v-if="haute">
                                <!-- Project title -->
                                <h1 class="project__title">Haute</h1>
                                <p class="project__description">Landing Page for a fashion designer’s personal productivity tool aimed at handling tasks and managing their customer base.</p>
                                <div class="project__action">
                                    <a href="https://c0depanda.bitbucket.io/Haute2/" target="_blank" class="btn btn--default">visit website</a>
                                </div>
                                <router-link to="/projects" class="back">back to my work</router-link>
                            </div>
                        </transition>
    
                        <transition name="panda2">
                            <div v-if="buffrspace">
                                <!-- Project title -->
                                <h1 class="project__title">Buffrspace</h1>
                                <p class="project__description">Find a great space to work Book from a diverse range of work and meeting spaces, just when you need them - Anywhere, Everywhere.</p>
                                <div class="project__action">
                                    <a href="http://buffrspace.com/" target="_blank" class="btn btn--default">visit website</a>
                                </div>
                                <router-link to="/projects" class="back">back to my work</router-link>
                            </div>
                        </transition>
    
                        <transition name="panda2">
                            <div v-if="hngtech">
                                <!-- Project title -->
                                <h1 class="project__title">HNGTECH</h1>
                                <p class="project__description">A Landing Page for an organisation that builds technologies for hospitality.</p>
                                <div class="project__action">
                                    <a href="http://hng.tech/" target="_blank" class="btn btn--default">visit website</a>
                                </div>
                                <router-link to="/projects" class="back">back to my work</router-link>
                            </div>
                        </transition>
    
                        <transition name="panda2">
                            <div v-if="recode">
                                <!-- Project title -->
                                <h1 class="project__title">Recode</h1>
                                <p class="project__description">ReCode Nigeria Hackathon website.</p>
                                <div class="project__action">
                                    <a href="https://c0depanda.bitbucket.io/recode/" target="_blank" class="btn btn--default">visit website</a>
                                </div>
                                <router-link to="/projects" class="back">back to my work</router-link>
                            </div>
                        </transition>
    
                        <transition name="panda2">
                            <div v-if="hotelsng">
                                <!-- Project title -->
                                <h1 class="project__title">HotelsNG</h1>
                                <p class="project__description">Hotels.ng is a Nigerian online hotels booking agency which list over 7,000 hotels from 21 regions in Nigeria.</p>
                                <div class="project__action">
                                    <a href="https://hotels.ng/" target="_blank" class="btn btn--default">visit website</a>
                                </div>
                                <router-link to="/projects" class="back">back to my work</router-link>
                            </div>
                        </transition>
    
                        <transition name="panda2">
                            <div v-if="airtel">
                                <!-- Project title -->
                                <h1 class="project__title">Airtel A Club</h1>
                                <p class="project__description">A Website that allows you to earn voucher points every time you do a airtime topup.</p>
                                <div class="project__action">
                                    <a href="https://c0depanda.bitbucket.io/Airtel/" target="_blank" class="btn btn--default">visit website</a>
                                </div>
                                <router-link to="/projects" class="back">back to my work</router-link>
                            </div>
                        </transition>
    
                    </div>
                </div>
            </div>
            <!-- right Slider -->
            <router-link tag="div" :to="{ name: 'projectlist', params: { name: nextProject.toLowerCase()}}" class="slider__right slido">
                <div class="slider__text">{{nextProject}}</div>
            </router-link>
        </main>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            projects: ['HAUTE', 'FORLOOP', 'BUFFRSPACE', 'HNGTECH', 'RECODE', 'HOTELSNG', 'AIRTEL'],
        }
    },

    computed: {
        // Haute Project
        haute() {
            // check if route is pointing to project
            if (this.$route.params.name == 'haute') {
                return true;
            }
            else {
                return false;
            }
        },

        // forloop Project
        forloop() {
            // check if route is pointing to project
            if (this.$route.params.name == 'forloop') {
                return true;
            }
            else {
                return false;
            }
        },

        // Haute Project
        buffrspace() {
            // check if route is pointing to project
            if (this.$route.params.name == 'buffrspace') {
                return true;
            }
            else {
                return false;
            }
        },

        // Hngtech Project
        hngtech() {
            // check if route is pointing to project
            if (this.$route.params.name == 'hngtech') {
                return true;
            }
            else {
                return false;
            }
        },

        // Recode Project
        recode() {
            // check if route is pointing to project
            if (this.$route.params.name == 'recode') {
                return true;
            }
            else {
                return false;
            }
        },

        // Hotelsng Project
        hotelsng() {
            // check if route is pointing to project
            if (this.$route.params.name == 'hotelsng') {
                return true;
            }
            else {
                return false;
            }
        },

        // airtel Project
        airtel() {
            // check if route is pointing to project
            if (this.$route.params.name == 'airtel') {
                return true;
            }
            else {
                return false;
            }
        },

        // project position
        projectPosition() {
            return (this.projects.indexOf(this.$route.params.name.toUpperCase()));
        },

        // previous Project
        prevProject() {
            if ((this.projectPosition - 1) < 0) {
                return this.projects[this.projects.length - 1];
            }
            else {
                return this.projects[this.projectPosition - 1];
            }
        },

        // next Project
        nextProject() {
            if ((this.projectPosition + 1) > (this.projects.length - 1)) {
                return this.projects[0];
            }
            else {
                return this.projects[this.projectPosition + 1];
            }
        }
    }
}
</script>