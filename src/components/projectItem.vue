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
                    <div class="container" v-if="item.id == projectPosition" v-for="item in projectList" :key="item.name">
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
export default {
    data() {
        return {
            projectList: [
                {
                    id: 0,
                    name: "HAUTE",
                    title: "Haute",
                    description: "Landing Page for a fashion designer’s personal productivity tool aimed at handling tasks and managing their customer base.",
                    link: "https://c0depanda.bitbucket.io/Haute2/",
                    image: "/assets/img/haute.jpg",
                },
                {
                    id: 1,
                    name: "FORLOOP",
                    title: "forLoop",
                    description: "A community of passionate software developers and enthusiasts across Africa.",
                    link: "https://c0depanda.bitbucket.io/forLoop/",
                    image: "/assets/img/forloop-Landing-Page.jpg",
                },
                {
                    id: 2,
                    name: "BUFFRSPACE",
                    title: "Bufferspace",
                    description: "Find a great space to work Book from a diverse range of work and meeting spaces, just when you need them - Anywhere, Everywhere.",
                    link: "http://buffrspace.com/",
                    image: "/assets/img/buffrspace.jpg",
                },
                {
                    id: 3,
                    name: "HNGTECH",
                    title: "HNGTECH",
                    description: "A Landing Page for an organisation that builds technologies for hospitality.",
                    link: "http://hng.tech/",
                    image: '/assets/img/HNGTECH.jpg"',
                },
                {
                    id: 4,
                    name: "RECODE",
                    title: "Recode",
                    description: "ReCode Nigeria Hackathon website.",
                    link: "https://c0depanda.bitbucket.io/recode/",
                    image: "/assets/img/reCode-Landing.jpg",
                },
                {
                    id: 5,
                    name: "HOTELSNG",
                    title: "HotelsNG",
                    description: "Hotels.ng is a Nigerian online hotels booking agency which list over 7,000 hotels from 21 regions in Nigeria.",
                    link: "https://hotels.ng/",
                    image: "/assets/img/hng.jpg",
                },
                {
                    id: 6,
                    name: "AIRTEL",
                    title: "Airtel A Club",
                    description: "A Website that allows you to earn voucher points every time you do a airtime topup.",
                    link: "https://c0depanda.bitbucket.io/Airtel/",
                    image: "/assets/img/Airtel.jpg",
                },
            ],
        };
    },

    mounted() {
        this.mobileSwipe();
    },

    computed: {
        // project position
        projectPosition() {
            return this.projectList.findIndex( item => this.$route.params.name == item.name.toLowerCase())
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