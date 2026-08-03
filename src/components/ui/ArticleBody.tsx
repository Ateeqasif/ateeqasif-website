import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-10 text-2xl font-semibold text-ink" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-8 text-xl font-semibold text-ink" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-5 leading-relaxed text-slate" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="font-medium text-accent-strong underline underline-offset-2" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-5 list-disc space-y-2 pl-5 text-slate" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-ink" {...props} />
  ),
};

export function ArticleBody({ content }: { content: string }) {
  return (
    <div className="prose-measure">
      <MDXRemote source={content} components={components} />
    </div>
  );
}
