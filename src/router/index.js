import Vue from 'vue';
import Router from 'vue-router';
import Main from '../components/Main';
import Form from "../components/Form";
import Statistics from "../components/Statistics";
import Login from '../components/Login';
import Register from '../components/Register';
import firebase from 'firebase';

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                requiresGuest: true
            }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                requiresGuest: true
            }
        },
        {
            path: '/form',
            name: 'form',
            component: Form,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/statistics',
            name: 'statistics',
            component: Statistics,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

// Nav Guard
router.beforeEach((to, from, next) => {
    // Check for requiresAuth guard
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Check if NO logged user
        if (!firebase.auth().currentUser) {
            // Go to login
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            // Proceed to route
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        // Check if NO logged user
        if (firebase.auth().currentUser) {
            // Go to login
            next({
                path: '/',
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            // Proceed to route
            next();
        }
    } else {
        // Proceed to route
        next();
    }
});

export default router;
