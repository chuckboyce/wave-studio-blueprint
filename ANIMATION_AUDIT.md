<!-- Animation Performance Audit -->

## Current Animated Elements (Total: 5)

### Always Active (2):
1. Hero wave SVG animation (15s duration, low amplitude)
2. Hero wave parallax (passive scroll effect)

### Conditional/Paused when off-screen (3):
3. ValueProps - Sparkles icon breathing (2s)
4. Services - Globe icon breathing (2s) 
5. Services - Database icon breathing (3s)

## Performance Optimizations Applied:

✅ **GPU-Only Properties**: All animations use `transform` only (scale, translate)
✅ **No Box-Shadow Animations**: Removed all hover shadow transitions
✅ **Will-Change Hints**: Added for active animations, removed when paused
✅ **Intersection Observer**: Animations pause when elements leave viewport
✅ **Prefers-Reduced-Motion**: All animations disabled when user prefers reduced motion
✅ **Capped at ≤ 8 elements**: Currently using only 5 animated elements
✅ **Passive Event Listeners**: Scroll handlers use `{ passive: true }`

## Animation Budget:
- **Used**: 5 animations
- **Available**: 3 more if needed
- **Total Cap**: 8 animations max
