import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import time
from discord.voice_client import VoiceClient

Client = discord.Client()
client = commands.Bot (command_prefix = "!")

@client.event
async def on_ready():
    print("Bot is ready!")

@client.event
async def on_message(message):
    if message.content == "cookie":
        await client.send_message(message.channel, ":cookie:")

client.run ("MzkyODY0Mzc5ODk0MzY2MjA5.DRtbXA.P_mAqtiwFu7cpIWwN_NLGnlYInw")
