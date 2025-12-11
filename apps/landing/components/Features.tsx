"use client";
import React from 'react';
import { Users, Lock, Database, Zap, Shield, Eye, Clock, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { EncryptedText } from './ui/Encrypted-text';
import { MagicCard } from './ui/magic-card';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2
    }
  },
};

export function Features() {
  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Two Ways to Chat Section */}
      <motion.section
        id="features"
        className="relative max-w-7xl mx-auto mb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium">
              Features
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
            Two Ways to Chat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the right level of privacy for every conversation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Persistent Group Chats Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group relative p-8 rounded-3xl bg-gradient-to-br from-secondary/50 to-muted border border-border hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Animated corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl border border-blue-500/20 group-hover:border-blue-500/40 transition-colors"
                >
                  <Users className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground">Persistent Group Chats</h3>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Like WhatsApp groups, but better. Messages are stored securely in the database for ongoing conversations.
              </p>

              <ul className="space-y-5">
                {[
                  { icon: Database, title: 'Stored Messages', desc: 'Access your conversation history anytime' },
                  { icon: Eye, title: 'Username Only', desc: 'No phone numbers, no personal identifiers' },
                  { icon: Zap, title: 'Text-Only Chat', desc: 'Fast, focused messaging for v1' },
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group/item"
                  >
                    <div className="p-2 bg-blue-500/10 rounded-lg group-hover/item:bg-blue-500/20 transition-colors">
                      <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{item.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Ephemeral Private Rooms Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group relative p-8 rounded-3xl bg-gradient-to-br from-secondary/50 to-muted border border-border hover:border-purple-500/30 transition-all duration-500 overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Animated corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="p-4 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl border border-purple-500/20 group-hover:border-purple-500/40 transition-colors"
                >
                  <Lock className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground">Ephemeral Private Rooms</h3>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                For truly private conversations. Messages exist only in RAM and disappear forever when you leave.
              </p>

              <ul className="space-y-5">
                {[
                  { icon: Trash2, title: 'Auto-Delete', desc: 'Room vanishes when the last user leaves' },
                  { icon: Clock, title: 'RAM Only', desc: 'Messages never touch the disk' },
                  { icon: Shield, title: 'Zero Retention', desc: 'No logs, no metadata, no trace' },
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group/item"
                  >
                    <div className="p-2 bg-purple-500/10 rounded-lg group-hover/item:bg-purple-500/20 transition-colors">
                      <item.icon className="h-5 w-5 text-purple-600 dark:text-purple-400 shrink-0" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{item.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Security First Section */}

      <motion.section
        id="security"
        className="relative max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-600 dark:text-green-400 text-sm font-medium">
              Security
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
            Security First
          </h2>
          <EncryptedText
            text="Your privacy is not negotiable"
            encryptedClassName="text-lg text-muted-foreground max-w-2xl mx-auto"
            revealedClassName="text-foreground"
            revealDelayMs={50}
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: 'End-to-End Encryption', desc: 'All messages are encrypted in transit and at rest. Only you and your recipients can read them.', color: 'blue' },
            { icon: Eye, title: 'No Phone Numbers', desc: 'Create an account with just a username. No phone number, no email required.', color: 'purple' },
            { icon: Trash2, title: 'Zero-Retention Chats', desc: 'Ephemeral rooms leave no trace. The server retains nothing after you disconnect.', color: 'green' },
            { icon: Lock, title: 'Private by Design', desc: "We can't read your messages. We don't track you. We don't sell your data.", color: 'yellow' },
            { icon: Database, title: 'Minimal Data Storage', desc: "We only store what's necessary for persistent groups. Private rooms? Nothing.", color: 'red' },
            { icon: Zap, title: 'Open Source', desc: "Don't trust, verify. Our code is open for audit by security researchers worldwide.", color: 'indigo' },
          ].map((item, idx) => (
            <MagicCard key={idx} gradientColor={"#262626"}
              className="p-0 rounded-2xl"
            >
              <motion.div
                variants={itemVariants}
                className="group relative p-7 bg-gradient-to-br from-secondary/30 to-muted/30 transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <motion.div>
                    <item.icon className={`h-9 w-9 text-${item.color}-600 dark:text-${item.color}-400 mb-5`} />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${item.color}-500/0 via-${item.color}-500/50 to-${item.color}-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </motion.div>
            </MagicCard>
          ))}
        </div>
      </motion.section>
    </div>
  );
}