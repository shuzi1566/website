// import Layout from '~/components/Layout'
import { getLayout } from '../components/Sidebar'
import StyledMarkdown from '~/components/StyledMarkdown'
import Head from 'next/head'
import React from 'react'
import getStaticMarkdownPaths from '~/lib/getStaticMarkdownPaths'
import getStaticMarkdownProps from '~/lib/getStaticMarkdownProps'
import { Headline1 } from '~/components/Headlines'

export async function getStaticPaths() { return getStaticMarkdownPaths('pages') }
export async function getStaticProps(args: any) { return getStaticMarkdownProps(args, 'pages') }

export default function StaticMarkdownPage({ frontmatter, content }: { frontmatter: any, content: any }) {

  return (
    <div>
      <Head>
        <title>JSON Schema - {frontmatter.title}</title>
      </Head>

   
      <Headline1>{frontmatter.title}</Headline1>
      <StyledMarkdown markdown={content} />
          
      

    </div>
  )
}
StaticMarkdownPage.getLayout = getLayout