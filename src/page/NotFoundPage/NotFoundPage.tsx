import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="container">
        <h2>404 - Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <a onClick={() => navigate("/")}>Back to home page</a>
      </div>
    </section>
  );
};

export default NotFoundPage;
