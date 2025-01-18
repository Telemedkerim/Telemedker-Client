<template>
  <div class="about-page">
    <div class="container">
      <h1 class="about-title">About Us</h1>

      <div class="about-content">
        <div class="about-section">
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div class="about-section">
          <h2>Our Mission</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        <div class="about-section">
          <h2>Our Values</h2>
          <ul class="values-list">
            <li>
              Innovation: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </li>
            <li>
              Quality: Ut enim ad minim veniam, quis nostrud exercitation.
            </li>
            <li>
              Integrity: Duis aute irure dolor in reprehenderit in voluptate.
            </li>
            <li>Excellence: Excepteur sint occaecat cupidatat non proident.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.about-page {
  padding: 4rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.about-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
}

.about-content {
  display: grid;
  gap: 2rem;
}

.about-section {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.about-section h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.about-section p {
  color: #666;
  line-height: 1.6;
}

.values-list {
  list-style-type: none;
  padding: 0;
}

.values-list li {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  color: #666;
}

.values-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #42b883;
}

@media (max-width: 768px) {
  .about-page {
    padding: 2rem 0;
  }

  .about-title {
    font-size: 2rem;
  }
}
</style>
