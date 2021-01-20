<template>
  <div class="profile container d-flex align-items-center">
    <div class="profile-wrapper">
      <div class="profile-card">
        <!-- Profile-Picture -->
        <img src="@/assets/images/avatar.jpg" alt="profile pics" />

        <h1>Sayed Ashraf</h1>
        <h4>Frontend Developer</h4>

        <p>
          Seeking a challenging opportunity as a frontend web developer in a
          company with a good reputation that will add to my knowledge, skills
          and experiences on a day by day basis.
        </p>

        <!-- Social Icons -->
        <div class="icons">
          <a href="https://www.facebook.com/SayedAshraf0/"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a href="https://twitter.com/SayedAshrff">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/sayedashrafsayed/">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/SayedAshraf">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/sayed-ashraf-57b0a011a">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.profile {
  width: 300px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  transition: 1s all ease;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../assets/images/profile.jpg");
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 1;
    transition: all 0.5s ease-in;
  }
  &:hover {
    &:before {
      opacity: 0;
      transition: all 0.5s ease;
    }
    .profile-wrapper {
      &::after {
        transform: skew(30deg) translateX(125%);
        background: linear-gradient(to right, #2b5876 0%, #4e4376 100%);
      }
      &::before {
        transform: skew(30deg) translateX(-125%);
        background: linear-gradient(to right, #2b5876 0%, #4e4376 100%);
      }
    }
    .profile-card {
      opacity: 1;
      transition: all 0.6s ease;
      transition-delay: 0.2s;
    }
  }
}
.profile-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #4e4376 0%, #2b5876 100%);
    transform: skew(30deg) translateX(125%);
    opacity: 0.9;
    transition: all 0.6s ease;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #4e4376 0%, #2b5876 100%);
    transform: skew(30deg) translateX(-125%);
    opacity: 0.9;
    transition: all 0.6s ease;
  }
  .profile-card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem 10px;
    position: relative;
    opacity: 0;
    transition: all 0.3s ease;
    img {
      display: block;
      margin: 0 auto;
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 50%;
      margin: 1rem 0;
      border: 2px solid transparent;
      background-image: linear-gradient(white, white),
        linear-gradient(to right, green, gold);
      background-origin: border-box;
      background-clip: content-box, border-box;
      position: relative;
    }
    h1 {
      line-height: 1.2;
      color: #222;
      font-size: 2em;
    }
    h4 {
      line-height: 1.5;
      color: #444;
      font-size: 1em;
    }
    p {
      line-height: 1.2;
      color: #333;
      margin: 37px 0;
      font-size: 0.8em;
    }
    .icons {
      display: flex;
      color: #333;
      width: 90%;
      justify-content: space-evenly;
      font-size: 1.4rem;
      margin: 5px 0;
      i {
        &:hover {
          background-image: linear-gradient(to right, #2b5876 0%, #4e4376 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
