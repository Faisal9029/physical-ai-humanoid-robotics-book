# Quickstart: Vision-Language-Action Module

**Feature**: Vision-Language-Action for Physical AI & Humanoid Robotics
**Date**: 2025-12-18

## Prerequisites

- ROS 2 Humble installed
- Python 3.10+
- NVIDIA Jetson Orin (or equivalent hardware)
- Microphone array for voice input
- Compatible humanoid robot platform

## Setup

1. Install dependencies:
   ```bash
   pip3 install openai-whisper transformers torch
   ```

2. Set up ROS 2 workspace:
   ```bash
   source /opt/ros/humble/setup.bash
   colcon build --packages-select vision_language_action
   source install/setup.bash
   ```

## Basic Usage

1. Launch the Vision-Language-Action pipeline:
   ```bash
   ros2 launch vision_language_action vision_language_action.launch.py
   ```

2. Test voice command processing:
   ```bash
   # Speak a command to the robot
   # Observe the transcription and planned actions
   ```

## Testing

1. Run unit tests:
   ```bash
   python3 -m pytest tests/unit/
   ```

2. Run integration tests:
   ```bash
   python3 -m pytest tests/integration/
   ```

## Validation

- Voice input accuracy: >90% in quiet environments
- Action planning latency: <1 second for simple commands
- Action execution success rate: >95% for valid commands
- Safety system response: <100ms for emergency stops