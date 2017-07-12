<template>
    <!-- Main Page -->
    <main class="main">
        <!-- Left Slider -->
        <div class="slider__left slido">
            <div class="slider__text">FORLOOP</div>
        </div>
        <!-- Project Page  -->
        <div class="project">
            <!-- Project Page -->
            <div class="project-section project-section--1" v-if="forloop">
                <div class="container">
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
                            <img src="assets/img/forloop-Landing-Page.jpg" alt="" class="project__image">
                        </div>
                    </div>
                    <!-- Project title -->
                    <h1 class="project__title">forLOOP</h1>
                    <p class="project__description">A community of passionate software developers and enthusiasts across Africa.</p>
                    <div class="project__action">
                        <a href="" class="btn btn--default">visit website</a>
                    </div>
                    <router-link to="/projects" class="back">back to my work</router-link>
                </div>
            </div>
            <!-- Project Page -->
            <div class="project-section project-section--2" v-else-if="haute">
                <div class="container">
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
                            <img src="assets/img/haute.png" alt="" class="project__image">
                        </div>
                    </div>
                    <!-- Project title -->
                    <h1 class="project__title">Haute</h1>
                    <p class="project__description">Landing Page for a fashion designer’s personal productivity tool aimed at handling tasks and managing their customer base.</p>
                    <div class="project__action">
                        <a href="" class="btn btn--default">visit website</a>
                    </div>
                    <router-link to="/projects" class="back">back to my work</router-link>
                </div>
            </div>
            <!-- Project Page -->
            <div class="project-section project-section--3" v-else-if="buffrspace">
                <div class="container">
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
                            <img src="assets/img/buffrspace.png" alt="" class="project__image">
                        </div>
                    </div>
                    <!-- Project title -->
                    <h1 class="project__title">Buffrspace</h1>
                    <p class="project__description">Find a great space to work Book from a diverse range of work and meeting spaces, just when you need them - Anywhere, Everywhere.</p>
                    <div class="project__action">
                        <a href="" class="btn btn--default">visit website</a>
                    </div>
                    <router-link to="/projects" class="back">back to my work</router-link>
                </div>
            </div>
            <!-- Project Page -->
            <div class="project-section project-section--4" v-else-if="hngtech">
                <div class="container">
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
                            <img src="assets/img/HNGTECH.png" alt="" class="project__image">
                        </div>
                    </div>
                    <!-- Project title -->
                    <h1 class="project__title">HNGTECH</h1>
                    <p class="project__description">A Landing Page for an organisation that builds technologies for hospitality.</p>
                    <div class="project__action">
                        <a href="" class="btn btn--default">visit website</a>
                    </div>
                    <router-link to="/projects" class="back">back to my work</router-link>
                </div>
            </div>
            <!-- Project Page -->
            <div class="project-section project-section--5" v-else-if="recode">
                <div class="container">
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
                            <img src="assets/img/reCode%20Landing.png" alt="" class="project__image">
                        </div>
                    </div>
                    <!-- Project title -->
                    <h1 class="project__title">Recode</h1>
                    <p class="project__description">ReCode Nigeria Hackathon website.</p>
                    <div class="project__action">
                        <a href="" class="btn btn--default">visit website</a>
                    </div>
                    <router-link to="/projects" class="back">back to my work</router-link>
                </div>
            </div>
            <!-- Project Page -->
            <div class="project-section project-section--6" v-else-if="hotelsng">
                <div class="container">
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
                            <img src="assets/img/hng.png" alt="" class="project__image">
                        </div>
                    </div>
                    <!-- Project title -->
                    <h1 class="project__title">HotelsNG</h1>
                    <p class="project__description">Hotels.ng is a Nigerian online hotels booking agency which list over 7,000 hotels from 21 regions in Nigeria.</p>
                    <div class="project__action">
                        <a href="" class="btn btn--default">visit website</a>
                    </div>
                    <router-link to="/projects" class="back">back to my work</router-link>
                </div>
            </div>
            <!-- Project Page -->
            <div class="project-section project-section--7" v-else-if="airtel">
                <div class="container">
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
                            <img src="assets/img/Airtel.png" alt="" class="project__image">
                        </div>
                    </div>
                    <!-- Project title -->
                    <h1 class="project__title">Airtel A Club</h1>
                    <p class="project__description">A Website that allows you to earn voucher points every time you do a airtime topup.</p>
                    <div class="project__action">
                        <a href="" class="btn btn--default">visit website</a>
                    </div>
                    <router-link to="/projects" class="back">back to my work</router-link>
                </div>
            </div>
        </div>
        <!-- right Slider -->
        <div class="slider__right slido">
            <div class="slider__text">HAUTE</div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {

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
    }
}
</script>