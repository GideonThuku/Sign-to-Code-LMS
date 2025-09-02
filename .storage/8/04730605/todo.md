# Sign-to-Code LMS Enhancement TODO

## Visual Enhancement & Features Implementation

### Core Files to Create/Modify:
1. **src/components/Auth/RegisterForm.tsx** - Registration form with Supabase integration
2. **src/components/Auth/LoginForm.tsx** - Login form 
3. **src/components/Pricing/PricingPlans.tsx** - Freemium pricing component
4. **src/components/SignLanguageAvatar.tsx** - Avatar component for all pages
5. **src/pages/Index.tsx** - Enhanced hero section with Robotica video
6. **src/pages/Courses.tsx** - Updated with new courses and payment locks
7. **src/pages/EmployerTraining.tsx** - New page for employer inclusivity training
8. **src/pages/Subscribe.tsx** - Subscription page
9. **src/lib/supabase.ts** - Supabase client configuration
10. **src/hooks/useAuth.tsx** - Authentication hook
11. **src/App.tsx** - Add new routes
12. **src/components/Layout.tsx** - Enhanced navigation and avatars

### Features to Implement:
- ✅ Modern visual design with gradients and animations
- ✅ Registration/Login forms with Supabase
- ✅ Freemium pricing model ($5/month for advanced)
- ✅ Hero section with Robotica video
- ✅ Advanced AI Engineering course (locked)
- ✅ Advanced Python course (locked)
- ✅ Sign language avatars on every page
- ✅ Employer training section
- ✅ Payment integration UI
- ✅ Responsive design enhancements

### Dependencies to Add:
- @stripe/stripe-js (for payments)
- react-player (for video)