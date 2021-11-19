const img1 = require("../images/blog-header-image.jpg").default
const img2 = require("../images/blog-sidebar-image.jpg").default
const img3 = require("../images/blog-sidebar-image01.jpg").default
const img4 = require("../images/blog-sidebar-image02.jpg").default

const blog = [
    {
        id: 1,
        title: "CREATIVE",
        desc: "The Key to Creative Work is Knowing When to Walk Away",
        img: img1,
    },
    {
        id: 2,
        title: "DESIGN",
        desc: "Why Truly Accessible Design Benefits Everyone",
        img: img2,
        color: "#dc3545"
    },
    {
        id: 3,
        title: "LIFESTYLE",
        desc: "Be Humble About What You Know",
        img: img3,
        color: "#28a745"
    },
    {
        id: 4,
        title: "CODING",
        desc: "The Mistakes I Made As a Coding Beginner",
        img: img4,
        color: "#007bff"
    }
]

export default blog