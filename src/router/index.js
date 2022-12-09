import Vue from 'vue'
import VueRouter from 'vue-router'
// 1.import
import MenuPage from '@/views/MenuPage'
import ContactPage from '@/views/ContactPage'
import ReservationPage from '@/views/ReservationPage'

Vue.use(VueRouter)

// 2.add to the array of use -> called registering/mentioning the route
const routes = [
  {
    // path is what the user need to type to show the vue and its's just gonna be root
    // the path
    path: "/",
    // where the path leads
    component: MenuPage,
    // giving each page a meta tags contaning a title, name and content
    meta: [
      {
        title: `Our Menu`
      },
      {
        name: "description",
        content: "Enjoy the italian style pizza"
      },
      {
        name: "author",
        content: "John Blake"
      }
    ]
  },
  {
    path: "/contact-us",
    component: ContactPage,
    meta: [
      {
        title: `Call Us`
      },
      {
        name: "description",
        content: "Call us, Email Us"
      },
      {
        name: "author",
        content: "Blake"
      }
    ]
  },
  {
    path: "/reservation",
    component: ReservationPage,
    meta: [
      {
        title: `Make a reservation`
      },
      {
        name: "description",
        content: "Make a reservation here"
      },
      {
        name: "author",
        content: "John"
      }
    ]
  }
]


const router = new VueRouter({
  routes
})

// adding meta tags
router.beforeEach((to, from, next) => {
  //1. Get all meta tags
  let metaTags = document.querySelectorAll(`meta`)
  //2. Loop through the tags and remove each
  for (let tag of metaTags) {
    // to get rid of the old meta tags as we're navigating through them
    tag.remove();
  }
  //then insert these tags here below
  //4. grabbing meta from each routes --> path(to).meta
  let newTags = to.meta;
  document.querySelector(`title`).innerText = newTags[0].title;

  for (let i = 1; i < newTags.length; i++) {
    document.querySelector(`head`).insertAdjacentHTML(`afterbegin`,
      `<meta name = "${newTags[i].name}" content="${newTags[i].content}">`)
  }

  document.querySelector(`head`).insertAdjacentHTML(`afterbegin`, `<meta charset="utf-8">
                                                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                                    <meta name="viewport" content="width=device-width,initial-scale=1.0">`)
  //3. not needed
  // to;
  // from;

  // is what navigates us to the next page
  next();
})

export default router
