const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navLinks.classList.toggle("is-open", !isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("is-open");
    });
  });
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  });
}

const formatDate = (value) => {
  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  }).format(date);
};

const buildPostItem = (post, fromBlogPage = false) => {
  const item = document.createElement("article");
  item.className = "post-item";

  const time = document.createElement("time");
  time.dateTime = post.date;
  time.textContent = formatDate(post.date);

  const content = document.createElement("div");
  const heading = document.createElement("h3");
  const link = document.createElement("a");
  link.href = `${fromBlogPage ? "posts/" : "blog/posts/"}${post.slug}.html`;
  link.textContent = post.title;
  heading.append(link);

  const description = document.createElement("p");
  description.textContent = post.description;
  content.append(heading, description);
  item.append(time, content);
  return item;
};

const loadPosts = async () => {
  const latestPosts = document.querySelector("#latest-posts");
  const allPosts = document.querySelector("#all-posts");
  if (!latestPosts && !allPosts) return;

  try {
    const fromBlogPage = document.body.dataset.page === "blog";
    const response = await fetch(fromBlogPage ? "../data/posts.json" : "data/posts.json");
    if (!response.ok) throw new Error("Posts could not be loaded");

    const posts = await response.json();
    if (!Array.isArray(posts) || posts.length === 0) return;

    posts.sort((a, b) => b.date.localeCompare(a.date));
    const target = allPosts || latestPosts;
    target.replaceChildren();
    const visiblePosts = allPosts ? posts : posts.slice(0, 3);
    visiblePosts.forEach((post) => target.append(buildPostItem(post, fromBlogPage)));
  } catch (error) {
    console.warn(error.message);
  }
};

loadPosts();
