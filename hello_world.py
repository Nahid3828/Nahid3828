#!/usr/bin/env python3
"""
Simple Hello World Application
A starter template to demonstrate basic Python functionality.
"""

def greet(name: str) -> str:
    """
    Greet a person by name.
    
    Args:
        name (str): The name of the person to greet
        
    Returns:
        str: A greeting message
    """
    return f"Hello, {name}! 👋 Welcome to Nahid3828!"


def main():
    """Main entry point of the application."""
    print("=" * 50)
    print("🌟 Welcome to Nahid3828 Project 🌟")
    print("=" * 50)
    
    # Example usage
    message = greet("Developer")
    print(message)
    
    print("\n📚 Basic Features:")
    features = [
        "✅ Simple and clean code structure",
        "✅ Well-documented functions",
        "✅ Easy to understand and extend",
        "✅ Production-ready template"
    ]
    
    for feature in features:
        print(f"   {feature}")
    
    print("\n🚀 Quick Start:")
    print("   1. Clone the repository")
    print("   2. Run: python3 hello_world.py")
    print("   3. Customize as needed!")
    
    print("\n" + "=" * 50)
    print("⭐ Don't forget to star this repository! ⭐")
    print("=" * 50)


if __name__ == "__main__":
    main()
