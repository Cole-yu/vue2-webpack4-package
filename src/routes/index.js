const Home = () => import(/* webpackChunkName: "home" */'@/views/Home');
const Bar = () => import(/* webpackChunkName: "bar" */'@/views/bar');

const routes = [
    {
        path: '*', 
        redirect: '/'
    },
    {
        path: '/',
        redirect: {
            name: "Home"
        }
    },
    {
        path: '/home',
        name: "Home",
        component: Home,
    },
    {
        path: '/bar',
        component: Bar,
        children: [
            {
                path: '',
                name: 'Baz',
                component: ()=>import(/* webpackChunkName: "baz" */'@/views/baz')
            },
        ]
    },
]

export default routes;