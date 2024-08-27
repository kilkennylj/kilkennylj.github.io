(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{3725:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return t(3850)}])},469:function(e,s,t){"use strict";t.d(s,{S3:function(){return h},Rj:function(){return m},y4:function(){return u},Zx:function(){return g},c_:function(){return d}});var n=t(5893),r=t(7294);t(4940);var a=t(4803),i=t.n(a),c=t(1664),l=t.n(c),u=e=>{let{post:s}=e;return(0,n.jsxs)("div",{className:"postCard",children:[(0,n.jsxs)("div",{className:"headers",children:[(0,n.jsx)("h1",{children:s.title}),(0,n.jsx)("h2",{children:s.excerpt}),(0,n.jsx)(i(),{date:s.date,format:"MM/DD/YYYY"})]}),(0,n.jsx)("div",{className:"postButton",children:(0,n.jsx)(l(),{href:`/blog/${s.slug}`,children:(0,n.jsx)("span",{className:"buttonText",children:"Continue Reading"})})})]})},o=t(2705),d=function(e){let{categories:s,slug:t}=e,[a,c]=(0,r.useState)([]);return(0,r.useEffect)(()=>{t?(0,o.IQ)(s,t).then(e=>{c(e)}):(0,o.no)().then(e=>{c(e)})},[t]),(0,n.jsxs)("div",{className:"widgetContainer",children:[(0,n.jsx)("h3",{children:t?"Related Posts":"Recent Posts"}),a.map(e=>(0,n.jsxs)("div",{className:"widgetItem",children:[(0,n.jsx)(i(),{date:e.publishedAt,format:"MM/DD/YYYY"}),(0,n.jsx)(l(),{href:`/blog/${e.slug}`,className:"widgetItemLink",children:e.title},e.slug)]},e.slug))]})},h=e=>{let{author:s}=e;return(0,n.jsxs)("div",{className:"authorContainer",children:[(0,n.jsx)("h2",{children:s.name}),(0,n.jsx)("img",{alt:s.name,className:"authorImg",src:s.picture.url})]})},g=e=>{let{post:s}=e,t=s.content.raw.children.map((e,s)=>"paragraph"===e.type?(0,n.jsx)("p",{children:e.children[0].text},s):(console.log("Error. Haven't allowed anything besides paragraphs from graphcms."),null));return(0,n.jsxs)("div",{className:"blogPost",children:[(0,n.jsxs)("div",{className:"headers",children:[(0,n.jsx)("h1",{children:s.title}),(0,n.jsx)("h2",{children:s.excerpt}),(0,n.jsx)(i(),{date:s.date,format:"MM/DD/YYYY"})]}),(0,n.jsx)("div",{className:"content",children:t})]})},m=()=>{let[e,s]=(0,r.useState)([]);return(0,r.useEffect)(()=>{(0,o.CP)().then(e=>s(e))},[]),(0,n.jsxs)("div",{className:"widgetContainer",children:[(0,n.jsx)("h3",{children:"Categories"}),e.map(e=>(0,n.jsx)("div",{className:"widgetItem",children:(0,n.jsx)(l(),{href:`category/${e.slug}`,children:(0,n.jsx)("span",{className:"category",children:e.name})})},e.slug))]})}},2705:function(e,s,t){"use strict";t.d(s,{CP:function(){return l},IQ:function(){return c},T6:function(){return a},no:function(){return i}});var n=t(7273);let r="https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clwtaz3rc00rz07w8c8kumlez/master",a=async()=>{let e=(0,n.Ps)`
        {
            postsConnection {
                edges {
                    node {
                        author {
                            biography
                            name
                            id
                            picture {
                                url
                            }
                        }
                        slug
                        title
                        excerpt
                        id
                        date
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `;return(await (0,n.WY)(r,e)).postsConnection.edges},i=async()=>{let e=(0,n.Ps)`
        query GetRecentPosts {
            posts(orderBy: createdAt_ASC, last: 3) {
                title
                date
                slug
            }
        }
    `;return(await (0,n.WY)(r,e)).posts},c=async(e,s)=>{let t=(0,n.Ps)`
        query GetPostDetails($slug: String!, $categories: [String!]) {
            posts(
                where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }
                last: 3
            ) {
                title
                date
                slug
            }
        }
    `;return(await (0,n.WY)(r,t,{categories:e,slug:s})).posts},l=async()=>{let e=(0,n.Ps)`
        query GetCategories {
            categories {
                name
                slug
            }
        }
    `;return(await (0,n.WY)(r,e)).categories}},3850:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return a}});var n=t(5893);t(7294),t(4940);var r=t(469),a=!0;s.default=e=>{let{post:s}=e;return(0,n.jsxs)("div",{className:"blogContainer",children:[(0,n.jsxs)("div",{className:"blog",children:[(0,n.jsx)(r.Zx,{post:s}),(0,n.jsx)(r.S3,{author:s.author})]}),(0,n.jsxs)("div",{className:"sidebar",children:[(0,n.jsx)(r.c_,{slug:s.slug,categories:s.categories.map(e=>e.slug)}),(0,n.jsx)(r.Rj,{})]})]})}},4940:function(){}},function(e){e.O(0,[885,452,888,774,179],function(){return e(e.s=3725)}),_N_E=e.O()}]);