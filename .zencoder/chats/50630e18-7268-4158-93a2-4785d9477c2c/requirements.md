# Feature Specification: Animated Greeting Card with Progressive Effects

## User Stories

### User Story 1 - Discover and Open New Message

**Acceptance Scenarios**:

1. **Given** the user visits the greeting card page, **When** the page loads, **Then** the splash screen displays a new message notification with an envelope icon and "Baca Pesan" (Read Message) button
2. **Given** the splash screen is displayed, **When** the user clicks "Baca Pesan" or waits 3 seconds, **Then** the page transitions to the main card view
3. **Given** the user is in the main card view, **When** the page has fully loaded, **Then** the greeting card with photo and message is visible

---

### User Story 2 - Experience Firecracker Effects on Entry

**Acceptance Scenarios**:

1. **Given** the user has just entered the main card page, **When** the page fully loads, **Then** firecracker (petasan) effects automatically play
2. **Given** firecracker effects are playing, **When** the effects complete, **Then** the page transitions to showing the greeting card with photo and message
3. **Given** firecracker effects are playing, **When** the user observes the screen, **Then** firecracker particles animate from the center outward with sound/visual impact

---

### User Story 3 - View Greeting Card with Progressive Effects

**Acceptance Scenarios**:

1. **Given** the greeting card is displayed, **When** the page has fully loaded, **Then** the card shows the photo, title "Selamat Ulang Tahun!", and congratulatory message
2. **Given** the user is viewing the greeting card, **When** the user clicks the "Klik untuk Surprise 🎉" button, **Then** progressive effects play: fireworks, balloons, and stars
3. **Given** effects are playing, **When** all effects complete, **Then** the effects clear and the card remains visible

---

## Requirements

### Functional Requirements
- **FR1**: Display firecracker (petasan) animation effects automatically when entering the main card page
- **FR2**: Firecracker effects must complete before the card is fully visible
- **FR3**: Firecracker effects must be visually distinct with particles/explosions radiating from center
- **FR4**: Maintain existing "Surprise" button functionality with fireworks, balloons, and stars effects
- **FR5**: All effects must be mobile-responsive and work on various screen sizes

### Non-Functional Requirements
- **NFR1**: Firecracker animation should complete within 1-2 seconds
- **NFR2**: Effects should not cause performance issues (smooth 60fps animation)
- **NFR3**: All animations should use CSS transitions/keyframes for performance
- **NFR4**: Effects should be dismissible via page reload or automatic timeout

---

## Success Criteria

- [ ] Firecracker effects play automatically when entering the main card page
- [ ] Firecracker effects are visually prominent and animated smoothly
- [ ] Card becomes visible after firecracker effects complete
- [ ] Existing "Surprise" effects (fireworks, balloons, stars) continue to work correctly
- [ ] All animations run smoothly without jank on desktop and mobile
- [ ] Feature is tested on Chrome, Firefox, and Safari
- [ ] No console errors or warnings
