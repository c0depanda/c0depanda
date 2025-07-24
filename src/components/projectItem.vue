<template>
    <transition name="rad">
        <!-- Main Page -->
        <main class="main">
            <!-- Left Slider -->
            <router-link tag="div" :to="{ name: 'projectlist', params: { name: prevProject.toLowerCase() } }" class="slider__left slido">
                <div class="slider__text">{{ prevProject }}</div>
            </router-link>
            <!-- Project Page  -->
            <div id="projects" class="project">
                <!-- Project Page -->
                <div class="project-section">
                    <div class="container" v-for="item in currentProject" :key="item.name">
                        <!-- Browser View -->
                        <div class="browser">
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
                                <img :src="item.image" alt="" class="project__image" />
                            </div>
                        </div>
                        <!-- Project title -->
                        <h1 class="project__title">{{ item.title }}</h1>
                        <p class="project__description">{{ item.description }}</p>
                        <div class="project__action">
                            <a :href="item.link" target="_blank" class="btn btn--default">visit website</a>
                        </div>
                        <router-link to="/projects" class="back">back to my work</router-link>
                    </div>
                </div>
            </div>
            <!-- right Slider -->
            <router-link tag="div" :to="{ name: 'projectlist', params: { name: nextProject.toLowerCase() } }" class="slider__right slido">
                <div class="slider__text">{{ nextProject }}</div>
            </router-link>
        </main>
    </transition>
</template>

<script>
import { projectList } from '../data/projects.js'

export default {
    data() {
        return {
            projectList: projectList,
        };
    },

    mounted() {
        this.mobileSwipe();
    },

    computed: {
        // project position
        projectPosition() {
            return this.projectList.findIndex((item) => this.$route.params.name == item.name.toLowerCase());
        },

        // previous Project
        prevProject() {
            if (this.projectPosition - 1 < 0) {
                return this.projectList[this.projectList.length - 1].name;
            } else {
                return this.projectList[this.projectPosition - 1].name;
            }
        },

        // next Project
        nextProject() {
            if (this.projectPosition + 1 > this.projectList.length - 1) {
                return this.projectList[0].name;
            } else {
                return this.projectList[this.projectPosition + 1].name;
            }
        },

        // current project filtered array
        currentProject() {
            return this.projectList.filter(item => item.id === this.projectPosition);
        },
    },

    methods: {
        // Navigate to next or previous project when a user swipes left or right on a mobile device
        mobileSwipe() {
            let stage = document.getElementById("projects");
            // create a manager for that element
            let mc = new Hammer.Manager(stage);
            // create a recognizer
            let Swipe = new Hammer.Swipe();
            // add the recognizer
            mc.add(Swipe);
            // subscribe to events
            mc.on("swiperight", (e) => {
                this.$router.push({ name: "projectlist", params: { name: this.nextProject.toLowerCase() } });
            });

            mc.on("swipeleft", (e) => {
                this.$router.push({ name: "projectlist", params: { name: this.prevProject.toLowerCase() } });
            });
        },
    },
};
</script>