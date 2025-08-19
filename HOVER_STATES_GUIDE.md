# Hover States Guide

## Why This Keeps Happening

Hover states are not automatic in Tailwind CSS. We need to explicitly define them for each interactive element. This guide establishes consistent patterns to prevent missing hover states.

## Design System

We now have a centralized design tokens file (`src/lib/design-tokens.ts`) with consistent hover patterns:

### Standard Hover Pattern
All interactive elements should include:
```
hover:shadow-lg hover:scale-105 cursor-pointer transition-all
```

### Button Types and Their Hover States

1. **Primary Action Buttons** (Continue, Submit)
   ```
   bg-black text-white hover:bg-gray-800 hover:scale-105 cursor-pointer
   ```

2. **Secondary Action Buttons** (Back, Cancel)
   ```
   text-gray-600 hover:text-black transition-colors cursor-pointer
   ```

3. **Selection Buttons** (Customer type, Location)
   ```
   hover:border-gray-400 hover:shadow-lg hover:scale-105 cursor-pointer
   ```

4. **Suggestion Buttons** (AI suggestions, features)
   ```
   hover:border-gray-400 hover:shadow-lg hover:scale-105 cursor-pointer
   ```

## Fixed Components

✅ **Step 1 (CustomerTypeStep)**: Enhanced with `hover:scale-105` and `cursor-pointer`
✅ **Step 2 (CoreProblemStep)**: Already had proper hover states
✅ **Step 3 (LocationStep)**: Added `hover:scale-105` and `cursor-pointer`
✅ **Step 4 (SmartCustomerFocusStep)**: Enhanced suggestion buttons
✅ **Step 5 (SmartKeyFeaturesStep)**: Enhanced suggestion buttons

## Best Practices

1. **Always include `cursor-pointer`** on interactive elements
2. **Use consistent scale effect** (`hover:scale-105`) for buttons
3. **Include proper transitions** (`transition-all`)
4. **Test hover states** during development
5. **Use design tokens** from `src/lib/design-tokens.ts`

## Prevention Strategy

1. **Use the design tokens file** instead of writing custom hover classes
2. **Review all interactive elements** when creating new components
3. **Include hover state testing** in component development
4. **Consider accessibility** - ensure hover states are also keyboard accessible

## Quick Checklist

When creating new interactive elements:
- [ ] Does it have a hover state?
- [ ] Does it have `cursor-pointer`?
- [ ] Does it use consistent design tokens?
- [ ] Is the transition smooth?
- [ ] Is it accessible via keyboard?