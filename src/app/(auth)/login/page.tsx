function LoginPage(props: PageProps<"/login">) {
  return (
    <section>
      <h1 className="text-2xl">로그인 페이지</h1>
      <button className="bg-primary text-white text-xl rounded-5 hover:bg-primary-light">
        Log in
      </button>
    </section>
  );
}

export default LoginPage;
