// Sidebar list options
const sidebarOptions = [
    { key: "home", label: "Home", link: "/" },
    {
      key: "about",
      label: "About",
      options: [
        { key: "about-us", label: "About us" },
        { key: "company", label: "Company" }
      ]
    },
    {
      key: "admin",
      label: "Admin",
      options: [
        { key: "header", label: "Header" , link: "/admin/header"},
        { key: "category", label: "Category" , link: "/admin/category"},
        { key: "product", label: "Product" , link: "/admin/product"},
        { key: "footer", label: "Footer", link: "/admin/footer" }
      ]
    },
    { key: "contact", label: "Contact" }
  ];
  
  const config = {
    sidebarOptions
  };
  
  export default config;
  