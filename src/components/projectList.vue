<template>
    <transition name="fader">
        <!-- Main Page -->
        <main class="main">
            <!-- Pre Caption -->
            <div class="pre-caption">
                <!-- pre caption item -->
                <div class="pre-caption__item">
                    <!-- pre caption item link -->
                    <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A//nosaobaseki.com/" target="_blank" class="pre-caption__link">SHARE ON FACEBOOK</a>
                </div>
                <!-- pre caption item -->
                <div class="pre-caption__item">
                    <!-- pre caption item link -->
                    <a href="https://twitter.com/home?status=Checkout%20%40c0depanda%20Portfolio%20site%20http%3A//nosaobaseki.com/" target="_blank" class="pre-caption__link">TWEET IT</a>
                </div>
            </div>
            <!-- Section -->
            <section class="section section--landing">
                <!-- Containter -->
                <div class="container">
                    <!-- Section Logo -->
                    <router-link to="/" tag="div" class="section__logo">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="156" height="156" viewBox="0 0 156 156">
                            <defs>
                                <path id="a" d="M2.004 93.77A1.999 1.999 0 0 1 0 91.78V6.354C0 2.85 2.87 0 6.398 0h142.35c3.528 0 6.4 2.85 6.4 6.354V91.78c0 1.1-.892 1.99-2.005 1.99H2.004z" />
                            </defs>
                            <g fill="none" fill-rule="evenodd">
                                <path fill="#030303" d="M109.734 18.827c-1.195 4.323-7.493 8.113-17.53 1.35-11.354-7.653-2.008-19.162 6.463-17.448 8.112 1.642 12.375 11.364 11.067 16.098M41.296 15.4c1.062 4.186 7.152 7.994 17.186 1.758 11.353-7.056 2.467-18.362-5.9-16.938-8.011 1.365-12.45 10.596-11.286 15.18M109.975 42.083c7.986 9.74 9.113 21.886 2.517 27.128-6.595 5.242-18.416 1.595-26.401-8.146-7.986-9.74-9.113-21.887-2.518-27.128 6.596-5.242 18.416-1.595 26.402 8.146M38.408 40.537c-6.082 11.193-4.928 23.491 2.58 27.469 7.506 3.976 18.522-1.874 24.605-13.067 6.082-11.194 4.927-23.492-2.58-27.47-7.507-3.976-18.523 1.874-24.605 13.068" />
                                <path fill="#FFF" d="M6.82 59.672c-3.733 0-6.82 3.135-6.82 6.88V156h155.148V66.553c0-3.746-3.088-6.88-6.82-6.88H6.82z" />
                                <g transform="translate(0 61.377)">
                                    <mask id="b" fill="#fff">
                                        <use xlink:href="#a" />
                                    </mask>
                                    <use fill="#030303" xlink:href="#a" />
                                    <path fill="#231F1F" d="M152.366 5.598V90.36h2.582V5.598c0-3.818-3.083-6.912-6.886-6.912H6.886C3.083-1.314 0 1.78 0 5.598V90.36h2.583V5.598c0-2.382 1.93-4.32 4.303-4.32h141.176c2.373 0 4.304 1.938 4.304 4.32z" mask="url(#b)" />
                                    <path fill="#FFF" d="M78.426 28.131c-6.591 0-11.934 5.343-11.934 11.935v17.049c0 6.591 5.343 11.934 11.934 11.934 6.592 0 11.935-5.343 11.935-11.934v-17.05c0-6.59-5.343-11.934-11.935-11.934m0 5.052a6.89 6.89 0 0 1 6.882 6.883v17.049a6.89 6.89 0 0 1-6.882 6.882 6.89 6.89 0 0 1-6.882-6.882v-17.05a6.89 6.89 0 0 1 6.882-6.882" mask="url(#b)" />
                                    <path fill="#FFF" d="M71.846 63.934l-4.502-2.42 7.52-14.43 11.204-10.428 3.44 3.815-10.556 9.824z" mask="url(#b)" />
                                </g>
                                <path fill="#FFF" d="M86.95 52c-2.9-4.778-2.563-11.759 1.706-13.64 4.268-1.88 9.808 1.69 11.934 5.968 2.901 4.777.853 10.23-2.557 11.934-3.41 1.705-8.956.016-11.082-4.262zM58.114 35.858c-4.1-2.417-8.996.092-10.933 5.604C45.244 46.974 47 53.402 51.1 55.82c4.101 2.417 8.997-.092 10.933-5.604 1.938-5.512.183-11.94-3.918-14.357" />
                                <path id="eyes" fill="#050505" d="M90.36 49.443c-1.645-.475-2.853-2.488-2.557-4.795.423-1.852 2.212-3.21 4.263-2.878 1.645.476 2.853 2.489 2.557 4.796-.422 1.851-2.211 3.21-4.262 2.877zM55.301 45.054c-1.865.28-3.678-1.181-4.049-3.264-.37-2.083.842-3.998 2.707-4.278 1.866-.28 3.678 1.181 4.049 3.264.37 2.083-.841 3.998-2.707 4.278z" />
                            </g>
                        </svg>

                    </router-link>
                    <!-- Section Text -->
                    <div class="section__text">
                        <!-- Section Introduction -->
                        <p class="section__text__item">Here is a few selection of some projects built in the past;
                            <br>
                            <span v-for="(project, index) in featuredProjects" :key="project.id">
                                <router-link :to="`/projects/${project.name.toLowerCase()}`" class="grey__text underlined">{{ project.name }}</router-link><span v-if="index < featuredProjects.length - 1">, </span>
                            </span>
                            <br> All built with a combination of <br />HTML, CSS, SCSS, JAVASCRIPT & VUE</p>

                        <!-- Section splitter -->
                        <div class="section__text__split"></div>

                        <!-- Section Outline -->
                        <p class="section__text__outline">If you'd like to collaborate on a project or just say hello:
                            <a href="mailto:fredobaseki@gmail.com" class="grey__text">fredobaseki@gmail.com</a>
                        </p>
                    </div>
                    <!-- Social Media Link -->
                    <SocialMedia />
                </div>
            </section>
            <!-- Post Caption -->
            <div class="post-caption">
                <!-- pre caption item -->
                <div class="post-caption__item">
                    <!-- pre caption item link -->
                    <span class="post-caption__link"> &copy; nosaobaseki.com All Rigths Reserved</span>
                </div>
            </div>
        </main>
    </transition>
</template>

<script>
import SocialMedia from './SocialMedia.vue'
import { projectList } from '../data/projects.js'

export default {
    components: {
        SocialMedia
    },
    data() {
        return {
            projectList: projectList
        }
    },
    computed: {
        // Get a selection of featured projects
        featuredProjects() {
            // Return all projects as featured ones
            return this.projectList;
        }
    }
}
</script>
