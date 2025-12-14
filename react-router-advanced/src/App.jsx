import ProtectedRoute from './components/ProtectedRoute';

const isAuthenticated = true; // أو false لتجربة redirect

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route
    path="/profile/*"
    element={
      <ProtectedRoute isAuthenticated={isAuthenticated}>
        <Profile />
      </ProtectedRoute>
    }
  />
  <Route path="/blog/:id" element={<Blog />} />
</Routes>
