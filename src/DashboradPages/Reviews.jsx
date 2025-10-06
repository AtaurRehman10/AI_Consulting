import React, { useState } from "react";
import { X, Plus, Edit, Trash2, Star, Save } from "lucide-react";

const ReviewsTab = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Maria Johnson",
      designation: "Operations Manager, Austin Manufacturing",
      rating: 5,
      description:
        "Core Implementations transformed our invoice processing from a 3-day manual nightmare to a 2-hour automated process. The ROI was clear within the first month.",
    },
    {
      id: 2,
      name: "Robert Chen",
      designation: "CEO, Dallas Professional Services",
      rating: 5,
      description:
        "Finally, a tech company that speaks our language. They understood our business needs and delivered exactly what we needed—no overselling, just results.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      designation: "Director of Operations, Houston Logistics",
      rating: 4,
      description:
        "Great service and support. The team was responsive and helped us implement AI solutions that actually work for our business size.",
    },
  ]);

  const [showReviewModal, setShowReviewModal] = useState(false);
  const [editingReview, setEditingReview] = useState(null);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    designation: "",
    rating: 5,
    description: "",
  });

  const openAddModal = () => {
    setReviewForm({
      name: "",
      designation: "",
      rating: 5,
      description: "",
    });
    setEditingReview(null);
    setShowReviewModal(true);
  };

  const openEditModal = (review) => {
    setReviewForm(review);
    setEditingReview(review.id);
    setShowReviewModal(true);
  };

  const handleSaveReview = () => {
    if (editingReview) {
      // Update existing review
      setReviews(
        reviews.map((r) =>
          r.id === editingReview ? { ...reviewForm, id: editingReview } : r
        )
      );
    } else {
      // Add new review
      setReviews([...reviews, { ...reviewForm, id: Date.now() }]);
    }
    setShowReviewModal(false);
  };

  const handleDeleteReview = (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      setReviews(reviews.filter((r) => r.id !== id));
    }
  };

  const StarRating = ({ rating, editable = false, onChange }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => editable && onChange && onChange(star)}
            className={`${
              editable ? "cursor-pointer" : "cursor-default"
            } transition-colors`}
            disabled={!editable}
          >
            <Star
              className={`w-6 h-6 ${
                star <= rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Reviews Management
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Manage customer testimonials and reviews
            </p>
          </div>
          <button
            onClick={openAddModal}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Plus className="w-5 h-5" />
            Add Review
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <StarRating rating={review.rating} />
              <div className="flex gap-2">
                <button
                  onClick={() => openEditModal(review)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Edit className="w-4 h-4 text-gray-600" />
                </button>
                <button
                  onClick={() => handleDeleteReview(review.id)}
                  className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              "{review.description}"
            </p>

            <div className="flex items-center pt-4 border-t border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-lg">
                {review.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{review.name}</h4>
                <p className="text-sm text-gray-600">{review.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingReview ? "Edit Review" : "Add New Review"}
              </h2>
              <button
                onClick={() => setShowReviewModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Customer Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Maria Johnson"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={reviewForm.name}
                  onChange={(e) =>
                    setReviewForm({ ...reviewForm, name: e.target.value })
                  }
                />
              </div>

              {/* Designation */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Designation *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Operations Manager, Company Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={reviewForm.designation}
                  onChange={(e) =>
                    setReviewForm({
                      ...reviewForm,
                      designation: e.target.value,
                    })
                  }
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Rating *
                </label>
                <StarRating
                  rating={reviewForm.rating}
                  editable={true}
                  onChange={(rating) =>
                    setReviewForm({ ...reviewForm, rating })
                  }
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Review Description *
                </label>
                <textarea
                  rows={5}
                  placeholder="Enter the customer's review..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={reviewForm.description}
                  onChange={(e) =>
                    setReviewForm({
                      ...reviewForm,
                      description: e.target.value,
                    })
                  }
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setShowReviewModal(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveReview}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <Save className="w-5 h-5" />
                  {editingReview ? "Update Review" : "Save Review"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewsTab;
