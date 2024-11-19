<template>
  <footer class="fond-footer text-white py-16">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <!-- Section gauche (menu + réseaux sociaux) -->
      <div class="flex flex-col md:w-1/3 space-y-6 md:pr-20">
        <!-- Menu de navigation -->
        <nav class="grid grid-cols-2 gap-x-6 gap-y-2 px-6">
          <button 
            @click="scrollToSection('home')" class="text-2xl md:text-3xl uppercase hover:text-gray-300 font-haut-de-page">Accueil</button>
          <button 
            @click="scrollToSection('apropos')" class="text-2xl md:text-3xl uppercase hover:text-gray-300 font-haut-de-page">À propos</button>
          <button 
            @click="scrollToSection('projets')" class="text-2xl md:text-3xl uppercase hover:text-gray-300 font-haut-de-page">Projets</button>
          <button 
            @click="scrollToSection('contact')" class="text-2xl md:text-3xl uppercase hover:text-gray-300 font-haut-de-page">Contact</button>
        </nav>

        <!-- Réseaux sociaux -->
        <div class="flex space-x-4 md:pl-6">
          <a href="https://www.linkedin.com/in/alban-chatelet-76256629b/" target="_blank" class="hover:text-gray-300">
            <img src="../assets/linkedin-icon.webp" alt="LinkedIn" class="w-24 h-24">
          </a>
          <a href="https://github.com/AlbanChatelet" target="_blank" class="hover:text-gray-300">
            <img src="../assets/github-icon.webp" alt="GitHub" class="w-24 h-24">
          </a>
        </div>
      </div>

      <!-- Bouton Télécharger CV (section centrale) -->
      <div class="my-6 md:my-0 md:w-1/3 flex justify-center">
        <a href="../assets/mon_cv.pdf" download
           class="bg-[#0099CC] text-white px-12 py-6 rounded-lg shadow-lg hover:bg-[#0088b2] text-xl md:text-3xl transition duration-300 font-haut-de-page">
          Télécharge mon CV !
        </a>
      </div>

      <!-- Logo (section droite) -->
      <div class="md:w-1/3 flex justify-end md:pt-16">
        <img src="../assets/logo.webp" alt="Logo AC" class="w-32 h-32">
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterPage",
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
.fond-footer {
  background-image: url('../assets/Fond_Footer.webp');
  background-size: cover;
}
</style>
