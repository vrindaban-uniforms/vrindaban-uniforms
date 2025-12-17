import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/categories';

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Product Categories
          </h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Explore our complete range of professional uniforms for every industry
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Order CTA */}
      <section className="bg-white py-16">
        <div className="w-full">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Bulk Orders?
            </h2>
            <p className="text-primary-100 max-w-2xl mx-auto mb-6">
              We specialize in large-scale uniform orders for hotels, hospitals, corporations, and factories.
              Get special pricing for bulk orders.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-block"
            >
              Request Bulk Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
