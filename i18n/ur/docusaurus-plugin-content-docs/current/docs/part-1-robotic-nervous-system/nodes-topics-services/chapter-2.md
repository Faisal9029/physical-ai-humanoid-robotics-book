---
title: Chapter 2 - Nodes, Topics, and Services
sidebar_position: 2
---

# Chapter 2: Nodes, Topics, and Services

This chapter delves into the fundamental communication mechanisms in ROS 2: nodes as computational units, topics for asynchronous data streaming, and services for synchronous request-response interactions. These form the backbone of any robotic system, particularly for humanoid robots with multiple interacting subsystems.

## Learning Objectives

By the end of this chapter, students will be able to:
- Implement ROS 2 nodes in both C++ and Python with proper lifecycle management
- Design topic-based communication patterns for real-time robotic applications
- Create and use services for synchronous robot operations
- Apply Quality of Service (QoS) policies to meet real-time requirements
- Design communication architectures for humanoid robot subsystems

## Conceptual Explanation

Nodes represent the fundamental computational units in ROS 2. Each node is an independent process that performs specific functions and communicates with other nodes through topics, services, or actions. In humanoid robotics, nodes typically represent different robot subsystems: perception nodes (processing camera, LIDAR, IMU data), control nodes (managing joint positions, balance), planning nodes (generating trajectories), and behavioral nodes (executing high-level tasks).

Topics enable asynchronous, one-to-many communication through a publish-subscribe pattern. Publishers send messages to topics, and any number of subscribers can receive those messages. This decouples the timing between publishers and subscribers, making it ideal for real-time sensor data streaming and control command distribution.

Services provide synchronous request-response communication, where a client sends a request and waits for a response. This is appropriate for operations that need acknowledgment or return specific results, such as calibration, configuration changes, or state queries.

For humanoid robots, the communication architecture must handle:
- High-frequency sensor data (IMU, joint encoders, camera feeds)
- Real-time control commands to actuators
- Asynchronous perception results (object detection, localization)
- Synchronous safety checks and configuration requests

Quality of Service (QoS) policies allow fine-tuning of communication behavior, specifying reliability, durability, and history characteristics that are crucial for safety-critical humanoid applications.

## Simulation Mapping

In simulation environments, nodes, topics, and services map to virtual robot systems as follows:

- **Sensor Simulation**: Gazebo plugins publish simulated sensor data (camera images, IMU readings, joint states) to ROS 2 topics that mirror real sensor interfaces, allowing the same processing nodes to work in both simulation and reality.

- **Actuator Simulation**: Control commands sent to topics are processed by Gazebo's physics engine to update joint positions and robot dynamics, simulating the response of real actuators.

- **Real-time Factor**: QoS settings can be adjusted in simulation to match real-time performance requirements, testing whether the communication architecture can handle timing constraints.

- **Network Simulation**: Multiple simulated robots can be connected through ROS 2 networks, testing multi-robot coordination algorithms before deployment on real hardware.

- **Performance Testing**: Simulation allows stress-testing of communication patterns with high message rates and network delays to identify bottlenecks before real hardware deployment.

## Hardware Mapping

When deploying nodes, topics, and services on real humanoid hardware, several factors must be considered:

- **Real-time Requirements**: Control nodes require deterministic timing, necessitating real-time kernel configurations and proper QoS settings to ensure messages arrive within deadlines.

- **Computational Distribution**: Different nodes may run on separate computational units (e.g., perception on GPU, control on real-time CPU), requiring careful network configuration and bandwidth management.

- **Safety Interlocks**: Service calls can be used for safety-critical operations, where a safety supervisor node can interrupt dangerous behaviors through synchronous communication.

- **Resource Management**: Node processes must be carefully managed to avoid overwhelming the robot's computational resources, with proper memory and CPU allocation.

- **Network Reliability**: Communication between distributed nodes must be robust, with appropriate QoS policies to handle potential network issues on mobile robots.

- **Hardware Interfaces**: Standardized hardware interfaces (ros2_control) allow the same control nodes to work with different actuator types, promoting code reusability.

## Assessment Alignment

This chapter's learning objectives connect to assessments through:

- **Implementation Projects**: Students create nodes that implement publisher-subscriber patterns for sensor data processing and control command distribution
- **QoS Configuration**: Students configure Quality of Service policies for different types of robotic communication and measure performance impacts
- **System Integration**: Students design and implement a communication architecture for a humanoid robot with multiple interacting subsystems
- **Simulation-to-Reality**: Students test the same nodes in both simulation and real environments to validate communication patterns