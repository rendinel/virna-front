exports.createPages = async ({ graphql, actions }) => {
  const blogListTemplate = require.resolve("./src/templates/blog-list.js")
  const singleBlogTemplate = require.resolve("./src/templates/single-blog.js")
  const productListTemplate = require.resolve("./src/templates/product-list.js")
  const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE) || 10
  const singleProductTemplate = require.resolve(
    "./src/templates/single-product.js"
  )
  const productsPerPage = 500
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityBlog {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityProduct {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `)
  if (result.errors) throw result.errors

  const blogs = result.data.allSanityBlog.nodes
  const products = result.data.allSanityProduct.nodes

  blogs.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug.current}`,
      component: singleBlogTemplate,
      context: { id: blog.id },
    })
  })

  products.forEach(product => {
    createPage({
      path: `/products/${product.slug.current}`,
      component: singleProductTemplate,
      context: { id: product.id },
    })
  })

  const totalBlogListPages = Math.ceil(blogs.length / postsPerPage)
  Array.from({ length: totalBlogListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? "/blogs" : `/blogs/${index + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalBlogListPages,
        currentPage: index + 1,
      },
    })
  })

  const totalProductListPages = Math.ceil(products.length / productsPerPage)
  Array.from({ length: totalProductListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? "/products" : `/products/${index + 1}`,
      component: productListTemplate,
      context: {
        limit: productsPerPage,
        offset: index * productsPerPage,
        numberOfPages: totalProductListPages,
        currentPage: index + 1,
        productsLength: products.length,
      },
    })
  })
}
