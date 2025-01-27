import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Transforming your school with the NexGen SMS | A Case Study #2",
    paragraph:
      "Discover how a leading school transformed their operations using NexGen's School Management System.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Kiran Kandel",
      image: "/images/blog/author-01.png",
      designation: "Education Technology Specialist",
    },
    tags: ["education", "technology", "management"],
    publishDate: "2025-01-20",
    btnText: "Learn more",
    btnHref: "#",
  },
  {
    id: 2,
    title: "School Management System",
    paragraph:
      "You can Transform your School with School Management System this fall. Here's How.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Sarah Johnson",
      image: "/images/blog/author-02.png",
      designation: "Digital Learning Expert",
    },
    tags: ["smart classroom", "digital learning", "edtech"],
    publishDate: "2025-01-15",
    btnText: "Learn more",
    btnHref: "#",
  },
  {
    id: 3,
    title: "App",
    paragraph:
      "Reimagining Education: NexGen's Insightful Webinar for School Leaders & Principals",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Michael Chen",
      image: "/images/blog/author-03.png",
      designation: "School Administration Consultant",
    },
    tags: ["school management", "automation", "efficiency"],
    publishDate: "2025-01-10",
    btnText: "Learn more",
    btnHref: "#",
  },
  {
    id: 4,
    title: "Digital Learning Solutions",
    paragraph:
      "Transform your classrooms with NexGen's innovative digital learning tools.",
    image: "/images/blog/blog-04.jpg",
    author: {
      name: "Emily Rodriguez",
      image: "/images/blog/author-04.png",
      designation: "Parent Engagement Specialist",
    },
    tags: ["communication", "parent engagement", "collaboration"],
    publishDate: "2025-01-05",
    btnText: "Learn more",
    btnHref: "#",
  },
  {
    id: 5,
    title: "Parent Communication Portal",
    paragraph:
      "Stay connected with parents through our intuitive communication platform.",
    image: "/images/blog/blog-05.jpg",
    author: {
      name: "David Thompson",
      image: "/images/blog/author-05.png",
      designation: "Education Data Analyst",
    },
    tags: ["analytics", "data", "student performance"],
    publishDate: "2024-12-30",
    btnText: "Learn more",
    btnHref: "#",
  },
];

export default blogData;
