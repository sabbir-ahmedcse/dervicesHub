ServiceHub — Web Project Requirements
A multi-service shopping platform with service cards, cart, total pricing, and bundle discounts.
Service Marketplace
Bundle Offers
Shopping Cart



6
১. Project-এর মূল ধারণা
একটি ওয়েবসাইট তৈরি করতে হবে যেখানে বিভিন্ন ধরনের সার্ভিস সুন্দর কার্ড আকারে প্রদর্শিত হবে। ইউজার তার প্রয়োজন অনুযায়ী এক বা একাধিক সার্ভিস সিলেক্ট করে কার্টে যোগ করতে পারবে।
সার্ভিস কেনার সময়:
প্রতিটি সার্ভিসের নাম, ছবি, বিবরণ ও দাম থাকবে।
ইউজার একাধিক সার্ভিস একসাথে কিনতে পারবে।
সিলেক্ট করা সব সার্ভিসের মোট দাম একসাথে দেখা যাবে।
দুইটি বা তার বেশি সার্ভিস একসাথে নিলে বিশেষ অফার বা ডিসকাউন্ট প্রাইস প্রযোজ্য হবে।
ইউজার অর্ডার কনফার্ম করে পেমেন্ট করতে পারবে।
২. Website-এর প্রধান পেজসমূহ
Home Page
আকর্ষণীয় Hero Section
জনপ্রিয় সার্ভিসের কার্ড
Featured Offers
Bundle Deals
Call to Action: “Explore Services”
All Services Page
সব সার্ভিস গ্রিড বা কার্ড আকারে দেখাবে
Category অনুযায়ী ফিল্টার
Search Option
Price Sorting
প্রতিটি কার্ডে “Add to Cart” বাটন
Cart / Checkout Page
নির্বাচিত সার্ভিসের তালিকা
প্রতিটি সার্ভিসের দাম
Subtotal
Bundle Discount
Final Total
Checkout ও Payment Option
User Dashboard
Profile Management
Order History
Purchased Services
Payment Status
Order Details
Admin Dashboard
সার্ভিস Add, Edit ও Delete
Category Management
Offer / Discount Management
Order Management
User Management
Sales ও Revenue Overview
৩. Service Card-এর Requirements
প্রতিটি সার্ভিস কার্ডে নিচের তথ্যগুলো থাকতে হবে:

Web Development
4.9
Professional Website Design
Responsive, modern and user-friendly website development for your business.
৳5,000
৳6,500
Add to Cart
View Details
উপরের দাম ও তথ্যগুলো শুধু UI-এর উদাহরণ; প্রকৃত প্রজেক্টে Admin Dashboard থেকে এগুলো পরিবর্তন করা যাবে।
প্রতিটি কার্ডে থাকতে হবে:
Service Image বা Icon
Service Name
Short Description
Category
Original Price
Discount Price, যদি থাকে
Rating বা Delivery Time
View Details Button
Add to Cart Button
৪. Cart ও Total Amount System
ইউজার যখন কোনো সার্ভিসে Add to Cart করবে, তখন সেটি কার্টে যুক্ত হবে। কার্টে একাধিক সার্ভিস থাকলে সবগুলোর দাম হিসাব করে দেখাতে হবে।
উদাহরণ: দুইটি সার্ভিস একসাথে কেনা
Your Shopping Cart
2 Services
সার্ভিস সিলেক্ট করে Bundle Offer-এর হিসাব দেখো।
Website Design
৳5,000
৳5,000
SEO Optimization
৳3,000
৳3,000
Subtotal
৳8,000
Bundle Discount (10%)
− ৳800
Total Amount
৳7,200
🎉 Bundle offer applied — তুমি ১০% সাশ্রয় করছো।
এটি একটি ইন্টার‌্যাক্টিভ হিসাবের উদাহরণ। প্রকৃত অফারের নিয়ম Admin নির্ধারণ করবে।
৫. Bundle Offer System
এই ফিচারটি প্রজেক্টের অন্যতম গুরুত্বপূর্ণ অংশ।
Starter Bundle
Save 10%
যেকোনো ২টি সার্ভিস একসাথে নিলে মোট দামের ওপর ১০% ছাড়।
উদাহরণ: Website Design + SEO = ৳8,000 → ৳7,200
Business Bundle
Save 15%
যেকোনো ৩টি সার্ভিস একসাথে নিলে ১৫% ছাড়।
উদাহরণ: Design + SEO + Marketing = ৳11,000 → ৳9,350
Premium Bundle
Save 20%
৫টি বা তার বেশি সার্ভিস একসাথে নিলে ২০% ছাড়।
Bundle Logic:
Cart-এ মোট সার্ভিস সংখ্যা গণনা করতে হবে।
সার্ভিস সংখ্যা অনুযায়ী সঠিক অফার নির্বাচন করতে হবে।
Subtotal থেকে Discount বাদ দিতে হবে।
Final Total রিয়েল-টাইমে আপডেট হবে।
অফার একাধিকবার ভুলভাবে প্রয়োগ করা যাবে না।
Admin চাইলে Bundle-এর discount percentage পরিবর্তন করতে পারবে।
৬. Recommended Service Categories
Web Development
Website, Landing Page, E-commerce
Graphics Design
Logo, Banner, UI/UX Design
Digital Marketing
Social Media, Ads, Marketing
SEO Services
On-page, Technical SEO, Audit
Video Editing
Reels, Promotional Video, Animation
Content Writing
Blog, Product Description, Copywriting
৭. Functional Requirements
User Side
ইউজার রেজিস্ট্রেশন ও লগইন করতে পারবে।
সার্ভিস ব্রাউজ ও সার্চ করতে পারবে।
সার্ভিসের বিস্তারিত দেখতে পারবে।
এক বা একাধিক সার্ভিস কার্টে যোগ করতে পারবে।
কার্ট থেকে সার্ভিস Remove করতে পারবে।
Quantity বা সার্ভিস প্যাকেজ পরিবর্তন করতে পারবে, যদি প্রযোজ্য হয়।
Bundle Discount স্বয়ংক্রিয়ভাবে দেখতে পারবে।
Checkout করে অর্ডার করতে পারবে।
অর্ডারের স্ট্যাটাস দেখতে পারবে।
Admin Side
সার্ভিস Add, Edit, Delete করতে পারবে।
সার্ভিসের নাম, ছবি, বিবরণ ও দাম পরিবর্তন করতে পারবে।
নতুন Category তৈরি করতে পারবে।
Bundle Offer তৈরি ও পরিবর্তন করতে পারবে।
Discount Rules সেট করতে পারবে।
সব অর্ডার দেখতে ও ম্যানেজ করতে পারবে।
User ও Payment Status ম্যানেজ করতে পারবে।
৮. Technology Requirements
Recommended Tech Stack
Frontend
React.js / Next.js
Styling
Tailwind CSS
Backend
Node.js + Express
Database
MongoDB
Authentication
JWT / Secure Sessions
Payment
bKash / SSLCommerz
৯. Non-Functional Requirements
Responsive Design: মোবাইল, ট্যাবলেট ও ডেস্কটপে ভালোভাবে কাজ করতে হবে।
Modern UI/UX: পরিষ্কার, আকর্ষণীয় ও সহজে ব্যবহারযোগ্য ডিজাইন।
Performance: সার্ভিস কার্ড দ্রুত লোড হবে।
Security: ইউজার ও পেমেন্ট ডেটা নিরাপদ রাখতে হবে।
Scalability: ভবিষ্যতে নতুন সার্ভিস ও অফার যোগ করা সহজ হতে হবে।
Validation: ভুল ডেটা, Invalid Coupon ও ভুল পেমেন্ট রোধ করতে হবে।
Accessibility: ভালো কনট্রাস্ট, কিবোর্ড নেভিগেশন ও সহজ ব্যবহার নিশ্চিত করতে হবে।
১০. Project-এর Expected Outcome
একটি সম্পূর্ণ Service Marketplace Website তৈরি হবে, যেখানে:
ইউজার বিভিন্ন সার্ভিস কার্ড থেকে পছন্দের সার্ভিস বেছে নিয়ে কার্টে যোগ করবে। সিস্টেম সব সার্ভিসের মোট মূল্য দেখাবে এবং দুই বা ততোধিক সার্ভিস একসাথে নিলে নির্ধারিত Bundle Offer অনুযায়ী ডিসকাউন্ট দিয়ে Final Amount দেখাবে। এরপর ইউজার Checkout ও Payment সম্পন্ন করতে পারবে।

