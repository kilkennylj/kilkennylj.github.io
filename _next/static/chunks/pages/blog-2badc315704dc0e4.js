(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{538:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return s(2522)}])},469:function(e,t,s){"use strict";s.d(t,{S3:function(){return h},Rj:function(){return m},y4:function(){return o},Zx:function(){return g},c_:function(){return d}});var n=s(5893),r=s(7294);s(4940);var a=s(4803),i=s.n(a),c=s(1664),l=s.n(c),o=e=>{let{post:t}=e;return(0,n.jsxs)("div",{className:"postCard",children:[(0,n.jsxs)("div",{className:"headers",children:[(0,n.jsx)("h1",{children:t.title}),(0,n.jsx)("h2",{children:t.excerpt}),(0,n.jsx)(i(),{date:t.date,format:"MM/DD/YYYY"})]}),(0,n.jsx)("div",{className:"postButton",children:(0,n.jsx)(l(),{href:`/blog/${t.slug}`,children:(0,n.jsx)("span",{className:"buttonText",children:"Continue Reading"})})})]})},u=s(2705),d=function(e){let{categories:t,slug:s}=e,[a,c]=(0,r.useState)([]);return(0,r.useEffect)(()=>{s?(0,u.IQ)(t,s).then(e=>{c(e)}):(0,u.no)().then(e=>{c(e)})},[s]),(0,n.jsxs)("div",{className:"widgetContainer",children:[(0,n.jsx)("h3",{children:s?"Related Posts":"Recent Posts"}),a.map(e=>(0,n.jsxs)("div",{className:"widgetItem",children:[(0,n.jsx)(i(),{date:e.publishedAt,format:"MM/DD/YYYY"}),(0,n.jsx)(l(),{href:`/blog/${e.slug}`,className:"widgetItemLink",children:e.title},e.slug)]},e.slug))]})},h=e=>{let{author:t}=e;return(0,n.jsxs)("div",{className:"authorContainer",children:[(0,n.jsx)("h2",{children:t.name}),(0,n.jsx)("img",{alt:t.name,className:"authorImg",src:t.picture.url})]})},g=e=>{let{post:t}=e,s=t.content.raw.children.map((e,t)=>"paragraph"===e.type?(0,n.jsx)("p",{children:e.children[0].text},t):(console.log("Error. Haven't allowed anything besides paragraphs from graphcms."),null));return(0,n.jsxs)("div",{className:"blogPost",children:[(0,n.jsxs)("div",{className:"headers",children:[(0,n.jsx)("h1",{children:t.title}),(0,n.jsx)("h2",{children:t.excerpt}),(0,n.jsx)(i(),{date:t.date,format:"MM/DD/YYYY"})]}),(0,n.jsx)("div",{className:"content",children:s})]})},m=()=>{let[e,t]=(0,r.useState)([]);return(0,r.useEffect)(()=>{(0,u.CP)().then(e=>t(e))},[]),(0,n.jsxs)("div",{className:"widgetContainer",children:[(0,n.jsx)("h3",{children:"Categories"}),e.map(e=>(0,n.jsx)("div",{className:"widgetItem",children:(0,n.jsx)(l(),{href:`category/${e.slug}`,children:(0,n.jsx)("span",{className:"category",children:e.name})})},e.slug))]})}},2705:function(e,t,s){"use strict";s.d(t,{CP:function(){return l},IQ:function(){return c},T6:function(){return a},no:function(){return i}});var n=s(7273);let r="https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clwtaz3rc00rz07w8c8kumlez/master",a=async()=>{let e=(0,n.Ps)`
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
    `;return(await (0,n.WY)(r,e)).posts},c=async(e,t)=>{let s=(0,n.Ps)`
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
    `;return(await (0,n.WY)(r,s,{categories:e,slug:t})).posts},l=async()=>{let e=(0,n.Ps)`
        query GetCategories {
            categories {
                name
                slug
            }
        }
    `;return(await (0,n.WY)(r,e)).categories}},2522:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return l}});var n=s(5893),r=s(7294);s(4940);var a=s(469),i=s(2705),c=function(){let[e,t]=(0,r.useState)([]),[s,c]=(0,r.useState)(!0);return((0,r.useEffect)(()=>{(async()=>{try{let e=await (0,i.T6)();t(e),c(!1)}catch(e){console.error("Error fetching posts:",e),c(!1)}})()},[]),s)?(0,n.jsx)("div",{children:"Loading..."}):(0,n.jsxs)("div",{className:"blogContainer",children:[(0,n.jsx)("div",{className:"blog",children:e.map(e=>(0,n.jsx)(a.y4,{post:e.node},e.node.id))}),(0,n.jsxs)("div",{className:"sidebar",children:[(0,n.jsx)(a.c_,{}),(0,n.jsx)(a.Rj,{})]})]})},l=()=>(0,n.jsx)("div",{className:"blogContainer",children:(0,n.jsx)(c,{})})},4940:function(){}},function(e){e.O(0,[885,452,888,774,179],function(){return e(e.s=538)}),_N_E=e.O()}]);