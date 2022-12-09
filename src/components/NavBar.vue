<template>
  <!-- we're linking the files with router-link -->
  <nav>
    <!-- the to is -> the path and only for internal links -->
    <router-link to="/">Home</router-link>
    <router-link to="/contact-us">Contact</router-link>
    <router-link to="/reservation">Reservation</router-link>

    <!-- regular a tags are for external link -->
    <!-- <a href="https://google.ca" target="blanks">Google</a> -->
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
/* the reason why styling an a tag works is cause eventually the router-link will be an a tag in html*/
a {
  margin-right: 10px;
}

/* router link is a class, so we could also style it like this. But it wont style the a tag itseld in this page */
/* .router-link-active {
  margin-right: 10px;
} */
</style>