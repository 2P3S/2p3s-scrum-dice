# 2P3S Scrum Dice

> Real-time planning poker for agile teams

<img width="800" alt="voting" src="https://github.com/2P3S/2p3s-scrum-dice/assets/52916934/8bd86a3d-216e-4d1c-9e61-7e3ff3132af9">

<img width="800" alt="result" src="https://github.com/2P3S/2p3s-scrum-dice/assets/52916934/49fc4ac1-be71-4350-8711-db83657e6c1f">

## Features
- Real-time voting & reveal with Socket.io
- Multi-user simultaneous sessions
- Average score calculation
- i18n support (EN / KR / JP)
- Responsive design
- Toast notifications for card events

## Tech Stack
Next.js 13 · TypeScript · Socket.io · Tailwind CSS · DaisyUI

## Architecture

### Atomic Design Pattern
```
src/components/
├── atoms/        # Button, Card, Input, Title
├── molecules/    # CardGroup, FormField
├── organisms/    # VotingBoard, UserList
└── templates/    # PageLayout
```

### System Flow
```
Client (Next.js)
    │
    ├── Create Room ──→ Socket Server ──→ Generate Room ID
    │
    ├── Join Room ──→ Socket Server ──→ Broadcast to Room
    │
    └── Vote/Reveal
            │
            ├── Submit Vote ──→ Socket Server ──→ Sync all clients
            │
            └── Reveal Cards ──→ Socket Server ──→ Calculate Average
                                                  └── Broadcast Results
```

## Development

### Storybook
Component-driven development with Storybook for isolated UI testing.

### Docker
```bash
# Development
npm run docker:dev    # localhost:3000

# Production
npm run docker:build
npm run docker:run
```

### Deployment
- AWS CodeDeploy with auto-deployment pipeline
- Docker containerized deployment

## Contributing
Issues and PRs are welcome.
