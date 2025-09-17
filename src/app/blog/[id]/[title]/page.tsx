import BlogCard from "./components/BlogCard";

interface BlogProp {
  params: { id: string; title: string };
}

export default function BlogDetail({ params }: BlogProp) {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">
        Detail Blog: {params.title}
      </h1>

      <BlogCard
        title={params.title}
        description="ini deskripsi blog sementara"
      />
    </div>
  );
}
